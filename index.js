const express = require('express');
const app = express();
app.use(express.json());

app.get('/deletion', (req, res) => {
  const challengeCode = req.query.challenge_code;
  const verificationToken = 'myebaytoken1234_ebaymarketplace23';
  const endpoint = 'https://ebay-notification-main.onrender.com';

  const crypto = require('crypto');
  const hash = crypto.createHash('sha256')
    .update(challengeCode + verificationToken + endpoint)
    .digest('hex');

  res.json({ challengeResponse: hash });
});

app.post('/deletion', (req, res) => {
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));
