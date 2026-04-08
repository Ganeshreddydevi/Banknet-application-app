package com.banknest.service;

import com.banknest.entity.Account;
import com.banknest.repo.AccountRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final AccountRepository repo;

    public AccountService(AccountRepository repo) {
        this.repo = repo;
    }

    public Account create(Account acc) {
        acc.setAccountNumber("ACC" + System.currentTimeMillis());
        acc.setBalance(0);
        return repo.save(acc);
    }

    public List<Account> getAll() {
        return repo.findAll();
    }

    public Account getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    
    public Account getByAccNo(String accNo) {
        return repo.findByAccountNumber(accNo);
    }
    
    public void deleteByAccNo(String accNo) {

        Account acc = repo.findByAccountNumber(accNo);

        if (acc != null) {
            repo.delete(acc);
        } else {
            throw new RuntimeException("Account not found");
        }
    }
 
}
