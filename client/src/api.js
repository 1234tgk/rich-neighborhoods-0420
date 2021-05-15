export async function getMembers() {
    const res = await fetch(new URL('/api/member', process.env.REACT_APP_API_SERVER_URL));
    return res.json();
}

export async function createMember(name, status) {
    const member = {
        name,
        status
    }

    await fetch(new URL('/api/member', process.env.REACT_APP_API_SERVER_URL), {
        body: JSON.stringify(member),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
}

// probably won't need it, but here it is anyway
export async function deleteMember(id) {
    await fetch(new URL(`/api/member/${id}`, process.env.REACT_APP_API_SERVER_URL), {
        method: 'DELETE'
    });
}