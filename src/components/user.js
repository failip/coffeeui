import React from "react";

const User = ({ user }) => {
    return (
        <div className="user">
            <div className="user_name">{user.name}</div>
            <div className="user_balance">{user.balance}€</div>
            <form className="deposit_form" onSubmit={sendDepositPostRequest}>
                <input type="hidden" name="name" value={user.name}></input>
                <input type="number" step="0.01" name="amount" defaultValue="0.00"></input>
                <input type="submit" value="+"></input>
            </form>
        </div>
    )
}

function sendDepositPostRequest(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let name = formData.get('name');
    let amount = parseFloat(formData.get('amount'));
    let request = new XMLHttpRequest();
    request.open('POST', 'http://10.125.29.32:8000/deposit');
    request.setRequestHeader('accept', 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({
        user: name,
        amount: amount
    }))
    window.location.reload();
}

export default User