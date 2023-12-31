package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Set;

@Data
@Entity
@Table(name = "rooms")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String address; // mã số phòng

    @OneToMany(mappedBy = "room")
    Set<Payment> payments;

    @Column(name = "type_room")
    private String typeRoom;
    private Float area; // diện tích căn

    @Column(name = "is_active")
    private boolean active; // true nếu có người ở

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL)
    private Set<User> users;

}
