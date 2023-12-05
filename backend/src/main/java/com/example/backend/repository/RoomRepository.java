package com.example.backend.repository;

import com.example.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.List;

import java.util.List;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    @Query("SELECT r FROM Room r WHERE r.address LIKE ?1%")
    List<Room> findByAddress(String address);
    boolean existsByAddress(String address);
}
//    Room findByAddress(String address);
