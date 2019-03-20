/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import dotenv from 'dotenv';
import uuid from 'uuid';
import moment from 'moment';
import auth from '../helpers/auth';
import database from '../db/database';
import createUser from '../db/sqlQueries/users';

dotenv.config();

class Account {
  // signup method that will be executed whenever user enters the required input
  static async userSignup(req, res) {
    if (!auth.validateEmail(req.body.email)) {
      return res.status(400).json({
        message: 'The entered password is not valid',
      });
    }
    // Hashing and compare password

    const encryptPassword = auth.passwordHashFunc(req.body.password);
    // auth.comparePassword(encryptPassword, req.body.password);
    
    console.log(req.body);
    const signUpContent = createUser.saveUsers;
    const values = [
      uuid.v4(),
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      encryptPassword,
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
      const token = auth.getToken(rows[0].id);

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
}


export default Account;
