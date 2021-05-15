package com.richneighborhoods0420.server;

import javax.persistence.*;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String date;
    private String description;
    private double amount;

    public Transaction() {
        this(0, null, null, 0.0);
    }

    public Transaction(long id, String date, String description, double amount) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.amount = amount;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
    public double getAmount() {
    	return amount;
    }
    
    public void setAmount(double amount) {
    	this.amount = amount;
    }
}
