const newrelic = require('newrelic');
const express = require ('express');
const PORT = 3000;
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '/../client')));

const gallery = 'http://localhost:3000';
const reservation = 'http://localhost:3001';
const popular = 'http://localhost:3002';
const header = 'http://localhost:3003/api/header';

// app.all('/gallery/:id', function(req, res) {
//     console.log('redirecting to gallery');
//     proxy.web(req, res, { target: gallery });
// });

// app.all('/reservation/:id', function(req, res) {
//     console.log('redirecting to reservation');
//     proxy.web(req, res, { target: reservation });
// });

// app.all('/popular/:id', function(req, res) {
//     console.log('redirecting to popular');
//     proxy.web(req, res, { target: popular });
// });

app.get('/header/:id', function(req, res) {
  console.log(header + '/' + req.params.id)
  axios.get(header + '/' + req.params.id)
    .then(({data}) => res.send(data))
});

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))
