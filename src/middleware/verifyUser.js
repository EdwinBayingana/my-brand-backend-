// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const verifyUser = async (req, res, next) => {
//     const {token}  = req.cookies;
//     if (!token) {
//         return res.status(401).json({
//             message: "Please Login First"
//         })
//     }
//     try {
//         const check = jwt.verify(token, process.env.SECRET_KEY)
//         const checkUser = await User.findOne({email: check.email})
//         if (!checkUser) {
//             return res.status(400).json({
//                 message: "Invalid token"
//             })
//         } else { 
//             next();
//         }

//     } catch (error) {
//         return res.status(500).json({
//             message: "Current User not authorized"
//         })
//     }
// }
// export default verifyUser