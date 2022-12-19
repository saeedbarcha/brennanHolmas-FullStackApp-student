const bcrypt = require('bcrypt');

//Register
bcrypt.hash('secret', 10, function (err, hash) {
  console.log(err);
  console.log(hash);
});

//Login
hashPassword = '$2b$10$ZmdJ5ecGrSSCdammjzN3Wu/5OcPnHPAtdSFoFrwW1Ru.SyOXioSoC';

bcrypt.compare('secret', hashPassword, (err, isMatch) => {
  console.log(isMatch);
});
