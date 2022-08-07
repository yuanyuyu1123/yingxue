package com.rs.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author yuan
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Back {
    @JsonProperty("account_number")
    private Long accountNumber;
    private String balance;
    @JsonProperty("firstname")
    private String firstName;
    @JsonProperty("lastname")
    private String lastName;
    private Integer age;
    private String gender;
    private String address;
    private String employer;
    private String email;
    private String city;
    private String state;
}

// "account_number":{
//        "type":"long"
//    },
//      "balance":{
//        "type":"long"
//      },
//      "firstname":{
//        "type":"keyword"
//      },
//      "lastname":{
//        "type":"keyword"
//      },
//      "age":{
//        "type":"integer"
//      },
//      "gender":{
//        "type":"text"
//      },
//      "address":{
//        "type":"text"
//      },
//      "employer":{
//        "type":"text"
//      },
//      "email":{
//        "type":"text"
//      },
//      "city":{
//        "type":"text"
//      },
//      "state":{
//        "type":"text"
//      }