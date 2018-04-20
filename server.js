const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/serverless-http-tests-use-baseurl', (req, res) => {
    const {baseUrl, originalUrl, url} = req;
    res.send({baseUrl, originalUrl, url});
});
app.use('/serverless-http-tests/static-use-baseurl', express.static('public'));

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));