package com.banknest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.banknest.entity.Transaction;
import com.banknest.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")  
@CrossOrigin("*")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping("/deposit")
    public void deposit(@RequestParam String accNo,
                        @RequestParam double amount) {
        service.deposit(accNo, amount);
    }

    @PostMapping("/withdraw")
    public void withdraw(@RequestParam String accNo,
                         @RequestParam double amount) {
        service.withdraw(accNo, amount);
    }

    @PostMapping("/transfer")
    public void transfer(@RequestParam String from,
                         @RequestParam String to,
                         @RequestParam double amount) {
        service.transfer(from, to, amount);
    }

    @GetMapping("/history/{accNo}")
    public List<Transaction> history(@PathVariable String accNo) {
        return service.history(accNo);
    }
}