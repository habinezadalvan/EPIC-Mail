/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import server from '../server';
import signUpValidation from '../helpers/signupValidation';
import loginValidation from '../helpers/loginValidation';
import database from '../db/database';
// import auth from '../helpers/auth';
// import signup from '../models/signup';

dotenv.config();


chai.use(chaiHttp);
chai.should();
// const { expect } = chai;

// signup tests part

describe('signup', () => {
  it('should be able to signup', (done) => {
    chai.request(server)
      .post('/api/v2/auth/signup').send({
        email: 'habine@gmail.com',
        firstName: 'chris',
        lastName: 'habineza',
        password: 'qwerty',
        confPassword: 'qwerty',
      })
      .end((err, res) => {
        if (err) {
          res.should.have.status(400);
        }
        // res.should.have.status(201);
        res.body.should.be.an('object');
      });
    done();
  });
});


describe('signup', () => {
  it('should be able to validate and return a 400 error status on wrong signup input', (done) => {
    chai.request(server)
      .post('/api/v2/auth/signup').send({
        email: 'habinegmail.com',
        firstName: 'chris',
        lastName: 'habineza',
        password: 'qwerty',
        confirmPassword: 'qwerty',
      })
      .end((err, res) => {
        const { error } = signUpValidation.validateSignUp(res.body);
        if (error) {
          res.should.have.status(400);
        }
        done();
      });
  });


  it('should varify if email has been used ', (done) => {
    chai.request(server)
      .post('/api/v2/auth/signup').send({
        email: 'habine@gmail.com',
        firstName: 'chris',
        lastName: 'habineza',
        password: 'qwerty',
        confirmPassword: 'qwerty',
      })
      .end((err, res) => {
        const { rows } = database.query(signUpContent, values);
        if (rows.length === 0) {
          res.should.have.status(400);
        }
      });
    done();
  });
});


// describe('signup', () => {
//   it('should be able to validate that newpassword is eqaul to confirmpasswad and give 400 status', (done) => {
//     chai.request(server)
//       .post('/api/v2/auth/signup').send({
//         newpwd: 'qwerty',
//         confPassword: 'ytrewq',
//       })
//       .end((err, res) => {
//         if (err) {
//           res.have.status(400);
//         }
//         done();
//       });
//   });
// });
// login tests part

// describe('login', () => {
//   it('should be able to login', (done) => {
//     chai.request(server)
//       .post('/api/v2/auth/login').send({
//         email: 'habineza@gmail.com',
//       })
//       .end((err, res) => {
//         if (!res.body.email || !res.body.password) {
//           res.should.have.status(400);
//         }
//         done();
//       });
//   });
// });

// describe('login', () => {
//   it('should be able to validate and return a 400 error status on wrong login input', (done) => {
//     chai.request(server)
//       .post('/api/v2/auth/login').send({
//         email: '',
//         password: 'qwerty',
//       })
//       .end((err, res) => {
//         const { error } = loginValidation.validateLogin(res.body);
//         if (error) {
//           res.should.have.status(400);
//         }
//         done();
//       });
//   });
// });
