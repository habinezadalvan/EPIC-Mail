import Joi from 'joi';
// the following code validate the login user input using Joi
const loginValidation = {

  validateLogin(loginAccount) {
    // the following object creates validating schema for user login input
    const loginSchema = {
      email: Joi.string().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(loginAccount, loginSchema);
  },
};

export default loginValidation; // this line exports login validation to the controller account.js file
