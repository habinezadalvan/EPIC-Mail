import signup from '../models/signup';
import signUpValidation from '../helpers/signupValidation';

const account = {

  userSignup(req, res, next) {
    const { error } = signUpValidation.validateSignUp(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const newId = Number(signup.length + 32);
    const newpwd = toString(req.body.password);
    const signupAccount = {
      id: newId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: newpwd,
    };
    signup.push(signupAccount);
    res.status(201).json({
      status: 201,
      data: [],
    });
    next();
  },
};

export default account;
