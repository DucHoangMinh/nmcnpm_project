package com.example.backend.payload;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Date;
@Data
@AllArgsConstructor
public class RegisterRequest {
    @NotBlank
    private String email;
    private String fullname;
    private Date dob;
    private boolean sex;
    private Long phone;
}
