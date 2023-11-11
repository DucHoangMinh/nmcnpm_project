package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    private String fullname;
    private String email;
    private String password;
    private String role;
    private Date dob;
    private Long phone;
    private Boolean sex;
    public User() {

    }
}
