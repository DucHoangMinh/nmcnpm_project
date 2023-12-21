package com.example.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.swing.text.html.Option;
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
    private String phone;
    @NotNull
    private Boolean sex;
    @NotNull
    private String relationship;
    @NotNull
    private String identity;
    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
    public User() {

    }
}
