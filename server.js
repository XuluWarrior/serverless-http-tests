const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/serverless-http-tests', (req, res) => {
    const {baseUrl, originalUrl, url} = req;
    res.send({baseUrl, originalUrl, url});
});
app.use('/serverless-http-tests/static', express.static('public'));

const handler = serverless(app);
module.exports.handler = (...args) => {
    return handler(...args);
}

app.listen(3000, () => console.log('Example app listening on port 3000!'));
