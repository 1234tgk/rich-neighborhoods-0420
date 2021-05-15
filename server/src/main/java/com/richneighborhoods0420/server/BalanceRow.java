package com.richneighborhoods0420.server;

public class BalanceRow {

    private long id;
    private String date;
    private String description;
    private double amount;
    private double balance;

    public BalanceRow(long id, String date, String description, double amount, double balance) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.amount = amount;
        this.balance = balance;
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

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
