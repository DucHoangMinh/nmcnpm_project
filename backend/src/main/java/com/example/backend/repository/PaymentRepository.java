package com.example.backend.repository;

import com.example.backend.model.Fee;
import com.example.backend.model.Payment;
import com.example.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface PaymentRepository extends JpaRepository<Payment, Long> {
    @Query("SELECT p FROM Payment p WHERE p.room = (SELECT r FROM Room r WHERE r.id = ?1) AND p.fee = (SELECT f FROM Fee f WHERE f.id = ?2)")
    Payment findByRoomIdAndFeeId(Long roomId, Long feeId);
    @Query("SELECT p FROM Payment p WHERE p.room = (SELECT r FROM Room r WHERE r.id = ?1)")
    List<Payment> findByRoomId(Long roomId);
    @Query("SELECT p FROM Payment p WHERE p.fee =(SELECT f FROM Fee f WHERE f.id = ?1)")
    List<Payment> findByFeeId(Long feeId);
    @Query("SELECT p.room FROM Payment p WHERE p.fee.id = ?1 AND (p.status = 'NOTDONE' OR p.status = 'PENDING')")
    List<Room>  findListOfIncompleteRooms(Long feeId);

    @Query("SELECT p.fee, p.status FROM Payment p WHERE p.room.id = ?1 AND p.status = 'NOTDONE' OR p.status = 'PENDING'")
    List<Fee> findIncompletedFee(Long roomId);

    @Modifying
    @Query("UPDATE Payment p SET p.status = 'PENDING' where p.fee.id = ?1 AND p.room.id = ?2")
    int setPendingStatus(Long feeId, Long roomId);

}
