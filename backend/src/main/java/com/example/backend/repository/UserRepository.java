package com.example.backend.repository;

import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByFullname(String fullname);
    User findByEmail(String email);
    Optional<User> findById(Long id);
    @Query("SELECT u FROM User u WHERE u.room.address = :roomAddress")
    Set<User> findByRoomAddress(String roomAddress);
    Set<User> findByRoomId(Long roomId);

}
