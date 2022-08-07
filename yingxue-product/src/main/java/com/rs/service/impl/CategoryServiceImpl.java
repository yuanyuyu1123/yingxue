package com.rs.service.impl;

import com.rs.constant.RedisPrefix;
import com.rs.entity.Category;
import com.rs.mapper.ICategoryMapper;
import com.rs.service.ICategoryService;
import com.rs.utils.JSONUtils;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author yuan
 */
@Service
@Slf4j
public class CategoryServiceImpl implements ICategoryService {

    private final ICategoryMapper categoryMapper;

    private final RedisTemplate<String,String> redisTemplate;

    private final RedissonClient redissonClient;

    @Autowired
    public CategoryServiceImpl(ICategoryMapper categoryMapper,RedisTemplate<String,String> redisTemplate,RedissonClient redissonClient) {
        this.categoryMapper = categoryMapper;
        this.redisTemplate = redisTemplate;
        this.redissonClient = redissonClient;
    }

    @Override
    public List<Category> selectCategoryList() {
        String m = redisTemplate.opsForValue().get(RedisPrefix.MENU_PREFIX + "MENU");
        RLock lock = redissonClient.getLock("lock");
        log.debug("lock = {}",lock);
        if(m!=null){
            return  JSONUtils.writeStringAsValue(m);
        }

        List<Category> categoryList = categoryMapper.selectCategoryList();

        //2、组装成父子的树形结构
        //2.1）、找到所有的一级分类，给children设置子分类
        List<Category> categories = categoryList.stream()
                .filter(category -> (category!=null)&&category.getParentCid() == 0)

                .peek(menu -> menu.setChildren(getChildless(menu, categoryList)))

                .sorted(Comparator.comparingInt(menu -> (menu.getSort() == null ? 0 : menu.getSort())))
                .collect(Collectors.toList());
        redisTemplate.opsForValue().set(RedisPrefix.MENU_PREFIX+"MENU", Objects.requireNonNull(JSONUtils.writeValueAsString(categories)));
        return categories;
    }

    @Override
    public int deleteCategoryByCid(Long cid) {
        return categoryMapper.deleteCategoryByCid(cid);

    }

    /**
     * 递归查找所有菜单的子菜单
     */
    private List<Category> getChildless(Category root, List<Category> all) {
        return all.stream()
                .filter(category -> (category!=null)&&category.getParentCid().equals(root.getCatId()))
                .peek(category -> {
                    // 找到子菜单
                    category.setChildren(getChildless(category, all));
                })
                .sorted(Comparator.comparingInt(menu -> (menu.getSort() == null ? 0 : menu.getSort())))
                .collect(Collectors.toList());
    }
}
