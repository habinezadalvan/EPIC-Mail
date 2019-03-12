// the follow lines imports joi that helps us to validate the user input
import Joi from 'joi';

// the following line has an object that contains a method that validates sign up information from the user
// after i exported that object to be access by account.js controller
const signUpValidation = {

  validateSignUp(signupAccount) {
    // this const contains validations
    const signUpSchema = {
      email: Joi.string().email().max(250).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    };
    return Joi.validate(signupAccount, signUpSchema);
  },
};

export default signUpValidation;
