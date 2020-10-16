const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const authenticateToken = (req, res, next) => {
    console.log("Middleware working")
    // console.log(req.headers['authorization'])

    let token = req.headers['authorization'].slice(7); // to remove the "Bearer" part
    if (token) {
       console.log("You have a token")
       next()
    const parsedToken = jwt.verify(token, SECRET);
    // console.log(parsedToken)
    }
   
    
  };

  module.exports = authenticateToken;