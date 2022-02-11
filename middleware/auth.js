const jwt = require("jsonwebtoken");



//Authentication function
function auth(req, res, next) {
    const token = req.header("x-auth-token");
    var idToken = token.split(' ')[1]
    //check for token
    if (!token) res.status(401).json({ status: "UnAuthorised user" });
    try {
      //verify token
      console.log(token);
      console.log("process.env.JWT_SECRET_KEY");
      let data = jwt.verify(token, "ictacademy");
      console.log(data,"data")
      req.user = data;
        next();
    //   jwt.verify(token, process.env.JWT_SECRET_KEY+"").then((decoded) => {
    //     console.log(decoded);
    //     req.user = decoded;
    //     next();
    //   });
    } catch (error) {
        console.log("error occured")
      res.status(400).json({ status: "Invalid token", error });
    }
  }
  
  module.exports = auth;