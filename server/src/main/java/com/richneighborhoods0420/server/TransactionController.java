package com.richneighborhoods0420.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RestController
@CrossOrigin
@RequestMapping("api/transaction")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping
    public Iterable<Transaction> findAllTransactions() { return transactionRepository.findAll(Sort.by(Sort.Direction.ASC, "date")); }

    @GetMapping("/balance")
    public List<BalanceRow> makeBalanceRow() {
        Iterable<Transaction> transactions = findAllTransactions();
        List<BalanceRow> ret = new ArrayList<>();

        double balance = 0;
        for (Transaction transaction : transactions) {
            balance += transaction.getAmount();
            ret.add(new BalanceRow(transaction.getId(), transaction.getDate(), transaction.getDescription(), transaction.getAmount(), balance));
        }

        return ret;
    }

    @GetMapping("/{id}")
    public Transaction findTransactionById(@PathVariable long id) {
        return transactionRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Transaction createTransaction(@Validated @RequestBody Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @PutMapping("/{id}")
    public Transaction updateTransaction(@PathVariable long id, @Validated @RequestBody Transaction newTransaction) {
        Transaction updatedTransaction = transactionRepository.findById(id)
                .map(transaction -> {
                    transaction.setAmount(newTransaction.getAmount());
                    transaction.setDate(newTransaction.getDate());
                    transaction.setDescription(newTransaction.getDescription());
                    return transactionRepository.save(transaction);
                })
                .orElseGet(() -> {
                    return null;
                });

        return updatedTransaction;
    }

    @DeleteMapping("/{id}")
    public void deleteTransaction(@PathVariable long id) {
        transactionRepository.deleteById(id);
    }
}
