import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import signup from '../models/signup';
import login from '../models/login';
import signUpValidation from '../helpers/signupValidation';
import loginValidation from '../helpers/loginValidation';

dotenv.config();

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

    // confirm password validation

    if (req.body.password !== req.body.confirmPassword) {
      res.status(400).json({
        message: 'Match your password to confirmPassword',
      });
    }
    // email validation
    let signupAccount = signup.find(email => email.email === req.body.email);
    if (signupAccount) {
      res.status(400).json({
        status: 400,
        message: 'The email entered has been used',
      });
    }
    signupAccount = {
      id: newId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: newPassword,
      confirmPassword: confPassword,
    };
    // sign up password authentication
    signupAccount.password = bcrypt.hash(signupAccount.password, 10);

    const token = jwt.sign({ id: signupAccount.id }, 'wikwiheba!');


    signup.push(signupAccount);
    res.status(201).json({
      status: 201,
      data: token,
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

    // login password authentication
    loginAccount.password = bcrypt.hash(loginAccount.password, 10);
    const token = jwt.sign({ id: loginAccount.id }, 'wikwiheba!');


    login.push(loginAccount);
    res.status(200).json({
      status: 200,
      data: token,
    });
    next();
  },
};


export default account;
