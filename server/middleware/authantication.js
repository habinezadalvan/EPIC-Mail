import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authorization = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || header === ' ') {
    return res.status(401).json({
      status: 401,
      message: 'You are not Authorized',
    });
  }
  const token = header;
  jwt.verify(token, process.env.SECRETKEY, (err, decode) => {
    if (err) {
      res.status(401).json({
        err,
      });
    } else {
      req.user = decode;
      next();
    }
  });
};

export default authorization;
