package com.rs.controller;

import com.rs.entity.Category;
import com.rs.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author yuan
 */
@RestController
public class CategoryController {

    private ICategoryService categoryService;

    @Autowired
    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/category/findAll")
    public List<Category> findAll(){
        List<Category> categoryList = categoryService.selectCategoryList();
        return categoryList;
    }


}
