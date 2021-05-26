export async function getBalances() {
    const res = await fetch('/api/transaction/balance');
    return res.json();
}

export async function createTransaction(description, amount) {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
    const transaction = {
        'date': dateStr,
        description,
        'amount': parseFloat(amount)
    }

    await fetch('/api/transaction', {
        body: JSON.stringify(transaction),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function deleteTransaction(id) {
    await fetch(`/api/transaction/${id}`, {
        method: 'DELETE'
    });
    
}
