package com.banknest.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.banknest.entity.Account;
import com.banknest.entity.Transaction;
import com.banknest.repo.AccountRepository;
import com.banknest.repo.TransactionRepository;

@Service
public class TransactionService {

	private final AccountRepository accRepo;
	private final TransactionRepository txRepo;

	public TransactionService(AccountRepository accRepo, TransactionRepository txRepo) {
		this.accRepo = accRepo;
		this.txRepo = txRepo;
	}

	public void deposit(String accNo, double amount) {

		Account acc = accRepo.findByAccountNumber(accNo);

		acc.setBalance(acc.getBalance() + amount);
		accRepo.save(acc);

		Transaction tx = new Transaction();
		tx.setType("DEPOSIT");
		tx.setAmount(amount);
		tx.setToAccount(accNo);

		txRepo.save(tx);
	}

	public void withdraw(String accNo, double amount) {

		Account acc = accRepo.findByAccountNumber(accNo);

		if (acc.getBalance() >= amount) {
			acc.setBalance(acc.getBalance() - amount);
			accRepo.save(acc);

			Transaction tx = new Transaction();
			tx.setType("WITHDRAW");
			tx.setAmount(amount);
			tx.setFromAccount(accNo);

			txRepo.save(tx);
		}
	}


	public void transfer(String from, String to, double amount) {

		Account a1 = accRepo.findByAccountNumber(from);
		Account a2 = accRepo.findByAccountNumber(to);

		if (a1.getBalance() >= amount) {

			a1.setBalance(a1.getBalance() - amount);
			a2.setBalance(a2.getBalance() + amount);

			accRepo.save(a1);
			accRepo.save(a2);

			Transaction tx = new Transaction();
			tx.setType("TRANSFER");
			tx.setAmount(amount);
			tx.setFromAccount(from);
			tx.setToAccount(to);

			txRepo.save(tx);
		}
	}

	public List<Transaction> history(String accNo) {
		return txRepo.findByFromAccountOrToAccount(accNo, accNo);
	}
}
