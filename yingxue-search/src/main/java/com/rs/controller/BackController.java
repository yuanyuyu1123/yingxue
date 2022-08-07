package com.rs.controller;

import com.rs.entity.Back;
import com.rs.service.IBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author yuan
 */
@RestController
public class BackController {

    private IBackService backService;

    @Autowired
    public BackController(IBackService backService) {
        this.backService = backService;
    }

    @GetMapping("/city")
    public Back getBackEmail(String city){
        List<Back> backs = backService.searchBackByCity(city);
        if(!backs.isEmpty()){
            return backs.get(0);
        }
        return new Back();
    }
}
