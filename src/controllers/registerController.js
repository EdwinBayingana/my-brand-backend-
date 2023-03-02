
import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerController = async (req, res) => {
  try {
    const { email, username, password, confirmPassword, isAdmin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let matchingPassword = bcrypt.compare(confirmPassword, hashedPassword);
    const newUser = await User.create({ email, username, password: hashedPassword, isAdmin });

    if(matchingPassword){
      res.status(201).json({
        message: "New User successfully created",
        data: newUser
      });
    } else {
      res.status(400).json({
        message: "Both passwords must match"
      })
    }
  } catch (error) {
    // console.log(error.code); 
    if (error.code === 11000) { //11000 is the errorCode printed out when the email already exists
      console.log(error)
      return res.status(403).json({
        message: "Email already exists"
      })
    }
    res.status(500).json({
      message: error.message
    });
  }
};

export default registerController;

// import User from "../models/User.js";
// import bcrypt from "bcrypt";

// const registerController = async (req, res) => {
//   const { email, username, password, isAdmin } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ email, username, password: hashedPassword, isAdmin });
//     res.status(201).json({
//       message: "New User successfully created",
//       data: newUser
//     });
//   } catch (error) {
//     // console.log(error.code); 
//     if (error.code === 11000) { //11000 is the errorCode printed out when the email already exists
//       console.log(error)
//       return res.status(403).json({
//         message: "Email already exists"
//       })
//     }
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };

// export default registerController;