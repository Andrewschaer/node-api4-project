const express =  require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('<h1>API4-PROJECT</h1>');
});

server.get('/api', (req, res) => {
    res.json({message: 'API4-PROJECT API IS WORKING'});
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});