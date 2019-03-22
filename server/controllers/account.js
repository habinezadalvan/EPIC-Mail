/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import dotenv from 'dotenv';
import auth from '../helpers/auth';
import validation from '../helpers/signupValidation';
import database from '../db/database';
import createUser from '../db/sqlQueries/users';

dotenv.config();

class Account {
  // SIGN UP FUNCTION
  static async userSignup(req, res) {
    // password validation

    if (!auth.validateEmail(req.body.email)) {
      return res.status(400).json({
        message: 'The input should be an email',
      });
    }
    // JOI VALIDATION
    const { error } = validation.validateSignUp(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    // Hashing and compare password

    const encryptPassword = auth.passwordHashFunc(req.body.password);
    // auth.comparePassword(encryptPassword, req.body.password);

    console.log(req.body);
    const signUpContent = createUser.saveUsers; // CALL SAVE USERS QUERY FROM USERS TABLE QUESRY
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      encryptPassword,
      new Date(),
    ];
    console.log(values);

    try {
      const { rows } = await database.query(signUpContent, values);
      if (rows.length === 0) {
        return res.status(400).json({
          status: 400,
          message: 'email already exists in our system',
        });
      }
      const token = auth.getToken(rows[0].id); // SIGN UP TOKEN

      return res.status(201).json({
        status: 201,
        data: token,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        status: 400,
        message: err,
      });
    }
  }
  // login method that will be executed whenever user enters the required input

  static async userLogin(req, res) {
    // validation
    if (!req.body.email || !req.body.password) {
      console.log(req.body);
      return res.status(400).json({
        status: 400,
        message: 'Missing email or password',
      });
    }
    if (!auth.validateEmail(req.body.email)) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid email',
      });
    }
    const loginContent = createUser.GetUser;

    try {
      const { rows } = await database.query(loginContent, [req.body.email]);
      if (rows.length === 0) {
        return res.status(400).json({
          status: 400,
          message: 'email does not exists in our system',
        });
      }
      if (!auth.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).json({
          status: 400,
          message: 'Incorrect email or password',
        });
      }
      const token = auth.getToken(rows[0].id);
      return res.status(200).json({
        data: [{
          status: 200,
          token,
        }],
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }

  static async getAllUsers(req, res) {
    const queryContent = createUser.getUsers;
    try {
      const { rows } = await database.query(queryContent);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'no group',
        });
      }
      res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
}


export default Account;
