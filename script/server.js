export async function getUsers() {
    const url = "https://rest-full-for-edu.onrender.com/api/read";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function redactUser(id, data) {
    const url = `https://rest-full-for-edu.onrender.com/api/update/${id}`;
    const redact = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export async function getById(id) {
    const url = `https://rest-full-for-edu.onrender.com/api/read/${id}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
}
