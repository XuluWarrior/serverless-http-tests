const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/static', express.static('public'));

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));