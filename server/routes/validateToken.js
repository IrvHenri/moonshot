const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {

  const token = req.header('auth-token');

  if (!token) {
    res.status(403).json("no token provided");
  }

  jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      res.status(401).json("Unauthorized access");
    }

    req.userId = decoded.id;
    next();
  });
  

};

module.exports = validateToken;