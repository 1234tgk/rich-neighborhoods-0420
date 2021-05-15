export async function getMembers() {
    const res = await fetch(new URL('/api/member', process.env.REACT_APP_API_SERVER_URL));
    return res.json();
}

export async function createMember(name) {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate();
    const member = {
        name,
        'expiryDate': dateStr
    }

    await fetch(new URL('/api/member', process.env.REACT_APP_API_SERVER_URL), {
        body: JSON.stringify(member),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
}

export async function activateMember(id) {
    await fetch(new URL(`api/member/${id}`, process.env.REACT_APP_API_SERVER_URL), {
        method: 'PUT'
    });
}

// probably won't need it, but here it is anyway
export async function deleteMember(id) {
    await fetch(new URL(`/api/member/${id}`, process.env.REACT_APP_API_SERVER_URL), {
        method: 'DELETE'
    });
    
}