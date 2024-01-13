package com.example.backend.payload;

import com.example.backend.model.Room;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserRequest {
    private String fullname;
    private Date dob;
    private String phone;
    private Boolean sex;
    private String relationship;
    private String identity;
}
