package com.example.backend.dto;


import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private String fullname;
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String role;
    @NotNull
    private Date dob;
    @NotNull
    private String phone;
    @NotNull
    private Boolean sex;
    @NotNull
    private String room;
    @NotNull
    private String relationship;
    @NotNull
    private String identity;
}

