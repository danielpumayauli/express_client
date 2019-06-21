import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {

    /* Se ejecuta antes de que el render se ejecute */
    componentDidMount() {
        request
            .get('http://localhost:3000/api/users')
            .end(function (err, res) {
                console.log(res);
            });

    }   // 15:35

    render() {
        return(
            <h1>Mi Aplicación</h1>
        )
    }
}

export default App;