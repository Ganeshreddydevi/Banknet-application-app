package com.banknest.service;

import org.springframework.stereotype.Service;

import com.banknest.entity.User;
import com.banknest.entity.Account;
import com.banknest.repo.UserRepository;
import com.banknest.repo.AccountRepository;

@Service
public class UserService {

    private final UserRepository userRepo;
    private final AccountRepository accRepo;

    public UserService(UserRepository userRepo, AccountRepository accRepo) {
        this.userRepo = userRepo;
        this.accRepo = accRepo;
    }

    
    public User register(User user) {

        
        User savedUser = userRepo.save(user);

        
        Account acc = new Account();
        acc.setAccountNumber("ACC" + System.currentTimeMillis());
        acc.setBalance(0);

        Account savedAcc = accRepo.save(acc);

        
        savedUser.setAccount(savedAcc);

        return userRepo.save(savedUser);
    }

    
    public User login(String username, String password) {

        User user = userRepo.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        throw new RuntimeException("Invalid credentials");
    }
}