package com.example.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO{
    private Long id;
    private String fullname;
    private String email;
    private String role;
    private Date dob;
    private Long phone;
    private boolean sex;
}

