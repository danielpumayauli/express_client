const express = require('express');
const app = express();

const users = [
    {
        "nombre": "Fabian"
    },
    {
        "nombre": "Pedro"
    }
];

app.get('/api/users',(req, res) =>{
    res.json({
        users: users
    })
});

app.use(express.static(__dirname + '/public'));

app.listen(3000,function () {
    console.log('server on port 3000');
});