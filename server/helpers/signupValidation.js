import Joi from 'joi';

// sign up JOI validation object
const signUpValidation = {

  validateSignUp(values) {
    const signUpSchema = {
      email: Joi.string().email().max(100).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    };
    return Joi.validate(values, signUpSchema);
  },
};

export default signUpValidation;
