
package com.banknest.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banknest.entity.Transaction;



public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    List<Transaction> findByFromAccountOrToAccount(String from, String to);
}
