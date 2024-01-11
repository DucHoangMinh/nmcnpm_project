package com.example.backend.repository;

import com.example.backend.model.Fee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeeRepository extends JpaRepository<Fee, Long> {
    @Query("SELECT f FROM Fee f WHERE f.id in (SELECT p.fee.id FROM Payment p WHERE p.status = 'DONE')")
    List<Fee> getDoneFees();
}
