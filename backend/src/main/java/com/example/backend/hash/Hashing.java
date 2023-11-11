package com.example.backend.hash;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

public interface Hashing {
    public String hashPassword(String password) throws NoSuchAlgorithmException, InvalidKeySpecException;
    public boolean validatePassword(String originalPassword, String storedPassword) throws NoSuchAlgorithmException, InvalidKeySpecException;
}
