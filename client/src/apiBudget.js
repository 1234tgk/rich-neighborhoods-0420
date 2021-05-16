export async function getBalances() {
    const res = await fetch(new URL('/api/transaction/balance', process.env.REACT_APP_API_SERVER_URL));
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

    await fetch(new URL('/api/transaction', process.env.REACT_APP_API_SERVER_URL), {
        body: JSON.stringify(transaction),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function deleteTransaction(id) {
    await fetch(new URL(`/api/transaction/${id}`, process.env.REACT_APP_API_SERVER_URL), {
        method: 'DELETE'
    });
    
}