const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err,user)=>{
            if(err) res.status(401).json("Token is not valid");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Your are not authenticated!")
    }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
};

/**
 * Middleware function to verify the token and check if the user is an admin.
 * @param {object} req - The request object containing the headers.
 * @param {object} res - The response object used to send the response.
 * @param {function} next - The next middleware function to be called.
 */
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}