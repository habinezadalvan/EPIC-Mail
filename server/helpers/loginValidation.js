import Joi from 'joi';
// login validation
const loginValidation = {

  validateLogin(loginAccount) {
    const loginSchema = {
      email: Joi.string().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(loginAccount, loginSchema);
  },
};

export default loginValidation;
