const validateToken = (req, res, next) => {
  //check for the existance of a token in the request header (x-auth-token)
  //if it doesn't exist, send response 401 unauthoroized
  //if it does exist, make sure it is valid....if not send 401, otherwise allow
  //request to proceed on
  res.send(
    `You've reached the endpoint. Your token header is: ${req.get(
      'x-auth-token'
    )}`
  );
};

module.exports = validateToken;
