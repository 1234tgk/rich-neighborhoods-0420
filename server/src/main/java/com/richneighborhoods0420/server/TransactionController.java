package com.richneighborhoods0420.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/transaction")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping
    public Iterable<Transaction> findAllTransactions() { return transactionRepository.findAll(); }

    @GetMapping("/{id}")
    public Transaction findTransactionById(@PathVariable long id) {
        return transactionRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Transaction createTransaction(@Validated @RequestBody Transaction transaction) {
        return transactionRepository.save(transaction);
    }
    
    @PutMapping
    public void updateTransaction(@Validated @RequestBody Transaction transaction) {
    	transactionRepository.save(transaction);
    }

    @DeleteMapping("/{id}")
    public void deleteTransaction(@PathVariable long id) {
        transactionRepository.deleteById(id);
    }
}
