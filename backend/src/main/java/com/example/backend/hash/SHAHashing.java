package com.example.backend.hash;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

public class SHAHashing implements Hashing{
    @Override
    public String hashPassword(String password) throws NoSuchAlgorithmException, InvalidKeySpecException {
        return null;
    }

    @Override
    public boolean validatePassword(String originalPassword, String storedPassword) throws NoSuchAlgorithmException, InvalidKeySpecException {
        return false;
    }
}
