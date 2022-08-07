package com.rs.service;

import com.rs.entity.Back;

import java.util.List;

/**
 * @author yuan
 */
public interface IBackService {
    List<Back> searchBackByCity(String city);
}
