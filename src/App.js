import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';


class App extends Component {

  constructor() {
    super()
    UniqueId.enableUniqueIds(this);
  
    this.state = {
        users: [
          { 
            id: this.nextUniqueId(),
            name: 'John',
            age: 22
          },
          {
            id: this.nextUniqueId(),
            name: 'Peter',
            age: 32
          },
          {
            id: this.nextUniqueId(),
            name: 'Amanda',
            age: 20
          }
        ]
    }
  }
  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index,1);{/*removes one element*/}
    this.setState({
      users : users
    });
        }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    })

    const user = Object.assign({}, this.state.users[index]);

    user.name = e.target.value; /*input-field value*/

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({
      users : users
    })
    

  }
        
  render() {
    return (
      <div className="App">
        <ul>
            {
              this.state.users.map((user, index) => {
                return (<User age=
                           {user.age}
                           deleteEvent={this.deleteUser.bind(this, index)}
                           key={user.id}
                           changeEvent = {this.changeUserName.bind(this, user.id)}
                >{user.name}</User>)

             })
            }
        </ul>
     
      </div>
    );
  }
}

export default App;
