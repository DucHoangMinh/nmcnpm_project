package com.example.backend.repository;

import com.example.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Room findByAddress(String address);
}
