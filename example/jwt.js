const jwt = require('jsonwebtoken');

const payload = {
  email: '',
};

const secretKey = 'mylittlesecret';

jwt.sign(payload, secretKey, {}, (err, token) => {
  console.log(token);
});

const sampleToken =
  '$2b$10$x.bUktTTZyHIdGrHS1UjT.4tCQNtqzZKVVTui/d6hmCxsJWwsuxUO';

jwt.verify(sampleToken, secretKey, (err, decoded) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(payload);
});
