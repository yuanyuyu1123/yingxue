package com.rs.mapper;

import com.rs.entity.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author yuan
 */
@Mapper
public interface ICategoryMapper {
    /**
     * 获得所有分类数据
     * */
    List<Category> selectCategoryList();

    /**
     * 通过cid删除分类数据
     * */
    int deleteCategoryByCid(Long cid);
}
