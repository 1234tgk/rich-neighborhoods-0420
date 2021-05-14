package server;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transaction")

public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long transaction_id;
	private String name;
	private double amount;
}
