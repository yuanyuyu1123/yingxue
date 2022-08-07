package com.rs.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

/**
 * @author yuan
 */
public class JSONUtils {


    public static String writeValueAsString(Object o) {
        try {
            return new ObjectMapper().writeValueAsString(o);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return  null;
    }

    public static <T> T writeStringAsValue(String o,Class<T> valueType) {
        try {
            return new ObjectMapper().readValue(o, valueType);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return  null;
    }

    public static <V> List<V>  writeStringAsValue(String o) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValues(objectMapper.getFactory().createParser(o), new TypeReference<V>() {
            }).readAll();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  null;
    }
}
