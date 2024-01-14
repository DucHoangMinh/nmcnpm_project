package com.example.backend.payload;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {
    public Long id;
    private String fullname;
    private String email;
    private String role;
    private Date dob;
    private String phone;
    private Boolean sex;
    private String relationship;
    private String identity;
}
