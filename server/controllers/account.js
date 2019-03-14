import lodash from 'lodash';
import signup from '../models/signup';
import login from '../models/login';
import signUpValidation from '../helpers/signupValidation';
import loginValidation from '../helpers/loginValidation';


const account = {

  // signup method that will be executed whenever user enters the required input

  userSignup(req, res, next) {
    // sign up JOI validation

    const { error } = signUpValidation.validateSignUp(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
      return;
    }
    const newId = (signup.length + 1);
    const newPassword = toString(req.body.password);
    const confPassword = toString(req.body.confirmPassword);

    if (newPassword !== confPassword) {
      res.status(400).json({
        message: 'Match your the password',
      });
    }

    const signupAccount = {
      id: newId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: newPassword,
      confirmPassword: confPassword,
    };
    signup.push(signupAccount);
    res.status(201).json({
      status: 201,
      data: lodash.pick(signupAccount, ['id', 'email', 'firstName', 'lastName']),
    });
    next();
  },
  // login method that will be executed whenever user enters the required input

  userLogin(req, res, next) {
    // login JOI validation
    const { error } = loginValidation.validateLogin(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
      return;
    }

    const newId = (login.length + 1);
    const newPassword = toString(req.body.password);

    const loginAccount = {
      id: newId,
      email: req.body.email,
      password: newPassword,
    };

    login.push(loginAccount);
    res.status(201).json({
      status: 201,
      data: lodash.pick(loginAccount, ['id', 'email']),
    });
    next();
  },
};


export default account;
