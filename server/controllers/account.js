
// eslint-disable-next-line max-len
// this code imports necessary lodash that will help me to choose what i want to send to the user and
// also imported signup model and sign up validation.
import lodash from 'lodash';
import signup from '../models/signup';
import login from '../models/login';
import signUpValidation from '../helpers/signupValidation';


// this object contains the signup and login methods that will be used as controllers and
// exported to the router file.

import loginValidation from '../helpers/loginValidation';


const account = {
// this is the signup method that will be executed whenever user enters the required input
  userSignup(req, res, next) {
    const { error } = signUpValidation.validateSignUp(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    // the fellowing lines creates the id by adding 1 to whichever index number of requested user's data structure.
    // sets password and confirm password to be string.
    const newId = Number(signup.length + 1);
    const newpwd = toString(req.body.password);
    const confPassword = toString(req.body.confirmPassword);

    if (newpwd !== confPassword) {
      res.status(400).json({
        message: 'Match your the password',
      });
    }
    // this line show the data structure for sign up
    const signupAccount = {
      id: newId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: newpwd,
      confirmPassword: confPassword,
    };
    signup.push(signupAccount);
    res.status(201).json({
      status: 201,
      data: lodash.pick(signupAccount, ['id', 'email', 'firstName', 'lastName']), // lodash.pick picks only what i want the use to see, i removed password and confirmPassword
    });
    next();
  },
  userLogin(req, res, next) {
    // the line adds validation to login api endpoint using JOI
    const { error } = loginValidation.validateLogin(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    // this line sets the id to in number and password to be string
    const newId = Number(login.length + 35);
    const newpwd = toString(req.body.password);
    // this line creates the login data structure that should be stored in the login empty array
    const loginAccount = {
      id: newId,
      email: req.body.email,
      password: newpwd,
    };
    // this line pushes the entered login date to the login model
    login.push(loginAccount);
    res.status(201).json({
      status: 201,
      data: lodash.pick(loginAccount, ['id', 'email']),
    });
    next();
  },
};

// this line exports the account controller to the router

export default account;
