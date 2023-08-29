const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Twilio configuration
const accountSid = 'AC18c0d303d12f463e74f1d1dbd7db582a';
const authToken = 'ee285f2d5175766e7a9af66e375b498e';
const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to send SMS
app.post('/send-sms', (req, res) => {
  const { name, time } = req.body;

  const message = `Reminder: Name - ${name}, Time - ${time}`;

  client.messages
    .create({
      body: message,
      from: '+12542766165',
      to: '+919586075609'
    })
    .then((message) => {
      console.log('SMS sent:', message.sid);
      res.sendStatus(200); // Send success status back to the client
    })
    .catch((error) => {
      console.error('Failed to send SMS:', error);
      res.sendStatus(500); // Send error status back to the client
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
