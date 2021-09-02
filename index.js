const express =  require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use(cors());

const users = [{username: 'user1', password: 'password1'}, {username: 'user2', password: 'password2'}, {username: 'user3', password: 'password3'}, {username: 'user4', password: 'password4'}, {username: 'user5', password: 'password5'}, {username: 'user6', password: 'password6'}, {username: 'user7', password: 'password7'}, {username: 'user8', password: 'password8'}];

function addUser(user) {
    users.push(user);
}

server.get('/', (req, res) => {
    res.send('<h1>API4-PROJECT</h1>');
});

server.get('/api', (req, res) => {
    res.json({message: 'API4-PROJECT API IS WORKING - TEST OTHER ENDPOINTS (GET /users, POST /register, POST /login)'});
});

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    if (req.body.username && req.body.password) {
        addUser(req.body);
        res.status(200).json(req.body);
    } else (
        res.status(400).json({message: 'Username & Password is required to create new user'})
    )
})

server.post('/api/login', (req, res) => {
    if (req.body.username && req.body.password) {
        if (users.some(user => user.username === req.body.username && user.password === req.body.password)) {
            res.status(200).json({message: `Welcome ${req.body.username}! We've missed you!`});
        } else (
            res.status(400).json({message: 'Username & Password do not match a registered user'})
        )
    } else (
        res.status(400).json({message: 'Username & Password is required to log in'})
    )
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});