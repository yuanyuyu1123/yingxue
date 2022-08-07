package com.rs.service;

import com.rs.entity.Category;

import java.util.List;

/**
 * @author yuan
 */
public interface ICategoryService {

    /**
     * 获得所有分类数据
     * */
    List<Category> selectCategoryList();

    /**
     * 通过cid删除分类数据
     * */
    int deleteCategoryByCid(Long cid);
}
