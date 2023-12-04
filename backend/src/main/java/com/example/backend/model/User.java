package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.sql.Date;


@Data
@Builder //Dùng để tạo một đối tượng theo khuôn mẫu có sẵn.
@Entity
@AllArgsConstructor
@Table(name = "user") 
public class User {
    @Id
    @GeneratedValue
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
    private Long phone;
    @NotNull
    private Boolean sex;
    public User() {

    }
}
