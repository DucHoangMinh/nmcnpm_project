package com.example.backend.repository;

import com.example.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("SELECT p FROM Payment p WHERE p.room = (SELECT r FROM Room r WHERE r.id = ?1) AND p.fee = (SELECT f FROM Fee f WHERE f.id = ?2)")
    Payment findByRoomIdAndFeeId(Long roomId, Long feeId);
    @Query("SELECT p FROM Payment p WHERE p.room = (SELECT r FROM Room r WHERE r.id = ?1)")
    List<Payment> findByRoomId(Long roomId);
}
