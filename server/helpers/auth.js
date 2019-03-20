
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const auth = {

  passwordHashFunc(passwordValue) {
    return bcrypt.hashSync(passwordValue, bcrypt.genSaltSync(10));
  },

  comparePassword(passwordHashFunc, password) {
    return bcrypt.compareSync(password, passwordHashFunc);
  },

  validateEmail(email) {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
  },

  getToken(valueId) {
    const token = jwt.sign({ id: valueId }, process.env.SECRETKEY);
    return token;
  },
};

export default auth;
