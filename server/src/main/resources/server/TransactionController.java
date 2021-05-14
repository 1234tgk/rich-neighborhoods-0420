package server;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.validation.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@GetMapping
	public List<Transaction> findAllTransactions() {
		return (List<Transaction>) transactionRepository.findAll();
	}
	
	public ResponseEntity<Transaction> findTransactionById(@PathVariable(value = "id") long id) {
		
		Optional<Transaction> transaction = transactionRepository.findById(id);
		
		if (transaction.isPresent()) {
			return ResponseEntity.ok().body(transaction.get());
		} else {
			return ResponseEntity.notFound().build();
		}
    }

    @PostMapping
    public Transaction saveTransaction(@Validated @RequestBody Transaction transaction) {
    	return transactionRepository.save(transaction);
    }
}
