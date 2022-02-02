import React from "react";

const AddUser = () => {
    return (
        <form className="add_user_form" onSubmit={sendCreateUserPutRequest}>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="number" step="0.01" name="balance" defaultValue="0.00"></input>
            <input type="submit"></input>
        </form>
    );
}

function sendCreateUserPutRequest(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let balance = parseFloat(formData.get('balance'));
    let request = new XMLHttpRequest();
    request.open('PUT', 'http://10.125.29.32:8000/users');
    request.setRequestHeader('accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        name: name,
        balance: balance
    }))
    window.location.reload();
}

export default AddUser