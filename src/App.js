import './App.css';
import React, { Component } from "react";
import User from './components/user';
import AddUser from './components/adduser';
import Settings from './components/settings';

class App extends Component {

  state = {
    users: null,
    settings: null
  }

  componentDidMount() {
    fetch('http://10.125.29.32:8000/users')
      .then(res => res.json())
      .then((data) => JSON.parse(data))
      .then((data) => {
        this.setState({ users: data })
      })
      .catch(console.log);
    fetch('http://10.125.29.32:8000/settings')
      .then(res => res.json())
      .then((data) => JSON.parse(data))
      .then((data) => {
        this.setState({ settings: data })
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state.user)
    if (this.state.users == null || this.state.settings == null) {
      return (<AddUser />);
    }
    return (
      <div className='page'>
        <h1>☕CoffeOrg</h1>
        <h2>Benutzer</h2>
        <div className='users'>
          {this.state.users.map(user => { return <User user={user} /> })}
        </div>
        <h2>Benutzer hinzufügen</h2>
        <AddUser />
        <Settings settings={this.state.settings} />
      </div>

    );
  }
}

export default App;
