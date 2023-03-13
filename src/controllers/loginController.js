import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const loginController = async (req, res) => {
  // email and password
  const { email, password } = req.body;
  try {
    // find user with the email
    const user = await User.findOne({ email });

    // check if that user exists or not
    if (!user) {
      return res.status(401).json({
        message: 'Invalid Credentials',
      });
    } else {
      // check password
      const comparedHashedPassword = await bcrypt.compare(
        password,
        user.password,
      );

      if (!comparedHashedPassword) {
        return res.status(401).json({
          message: 'Invalid Credentials',
        });
      }
      // } else if (user.isAdmin === false) {
      //   location.href =
      //     'file:///Users/zeds/Documents/Coding/ANDELA/Core%20Concepts/my-brand-integrated/my-brand/index.html';
      // }
      else {
        // create a sign in token
        const token = jwt.sign(
          { email: user.email, username: user.username, isAdmin: user.isAdmin },
          process.env.SECRET,
          {
            expiresIn: '1d',
          },
        );
        // console.log(token)

        // ! ................................................................Implement cookies......................................................
        res.cookie('token', token, {
          httpOnly: true,
        });

        return res.status(200).json({
          message: 'User successfully logged in',
          token: token,
          data: {
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default loginController;
