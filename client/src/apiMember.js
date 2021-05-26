export async function getMembers() {
    const res = await fetch('/api/member');
    return res.json();
}

export async function createMember(name) {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
    const member = {
        name,
        'expiryDate': dateStr
    }

    await fetch('/api/member', {
        body: JSON.stringify(member),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function activateMember(id) {
    await fetch(`/api/member/${id}`, {
        method: 'PUT'
    });
}

export async function deleteMember(id) {
    await fetch(`/api/member/${id}`, {
        method: 'DELETE'
    });
    
}
