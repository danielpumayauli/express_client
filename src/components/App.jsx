import React, { Component } from 'react';
import request from 'superagent';
// import { parse } from 'url';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    /* Se ejecuta antes de que el render se ejecute */
    componentDidMount() {
        request
            .get('http://localhost:3000/api/users')
            .end((err, res) => {
                const users = JSON.parse(res.text).users;
                console.log(users);
                this.setState({
                    users: users
                });
            }); // 18:27

    }  

    render() {
        var users = this.state.users.map((user,i) => {
            return <li key={i}>{user.nombre}</li>
        });

        console.log(typeof(this.state.users));
        return(
            <div>
                <h1>Mi Aplicación Modificada</h1>
                {users}
            </div>
        )
    }
}

export default App;