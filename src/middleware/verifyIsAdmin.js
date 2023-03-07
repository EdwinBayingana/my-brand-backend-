import jwt from "jsonwebtoken";

const verifyIsAdmin = (req, res, next) => {
    // Check whether the request has an authorization header
    const {token} = req.cookies;
    // const authHeader = token;
    // const authHeader = req.headers.authorization;
    // console.log(req.cookies);

    // The condition
    if(!token){
        return res.status(401).json({
                    message: "No token provided"
                })
    } else {
        //Lets get our token seperately from 'Bearer <token>' by spliting it
        // const token = authHeader.split(" ")[1];
        // console.log(token)

        //Condition we'll use to verify the token
        try {
            const verifiedUser = jwt.verify(token, process.env.SECRET, {expiresIn: '1d'});
            if(!verifiedUser.isAdmin){
                return res.status(401).json({
                    message: "User not Authorized"
                })
            } 
            next();

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

};

export default verifyIsAdmin;