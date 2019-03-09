import Joi from 'joi';

const signUpValidation = {

  validateSignUp(signupAccount) {
    const signUpSchema = {
      email: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
    };
    return Joi.validate(signupAccount, signUpSchema);
  },
};

export default signUpValidation;
