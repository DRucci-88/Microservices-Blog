const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body; // Could be anything (JSON, ....)
  console.log(event);
  events.push(event); // Latest event will be stored at the end
  
  axios.post('http://localhost:4000/events', event).catch(() => '').then(() => '');
  axios.post('http://localhost:4001/events', event).catch(() => '').then(() => '');
  axios.post('http://localhost:4002/events', event)
    .then((res) => { console.log(res.status); console.log('Success') })
    .catch((res) => { console.log(res.status); console.log('Error') });
  axios.post('http://localhost:4003/events', event).catch(() => '').then(() => '');

  res.send({ status: 'OK' });

});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event-Bus Service Listening on 4005');
});