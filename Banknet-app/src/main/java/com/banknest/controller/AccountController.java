package com.banknest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.banknest.entity.Account;
import com.banknest.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin("*")
public class AccountController {

    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    @PostMapping
    public Account create(@RequestBody Account acc) {
        return service.create(acc);
    }

    @GetMapping
    public List<Account> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Account getById(@PathVariable Long id) {
        return service.getById(id);
    }

    
    @GetMapping("/number/{accNo}")
    public Account getByAccNo(@PathVariable String accNo) {
        return service.getByAccNo(accNo);
    }
    @DeleteMapping("/{accNo}")
    public String delete(@PathVariable String accNo) {
        service.deleteByAccNo(accNo);
        return "Account deleted successfully";
    }
}
