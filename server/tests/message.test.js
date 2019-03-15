/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import server from '../server';
import emails from '../models/message';

dotenv.config();

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe('post message', () => {
  it('should be able to create a message', (done) => {
    chai.request(server)
      .post('/api/v1/messages').send({
        subject: 'subject',
        message: 'message is here',
        status: 'sent',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.an('object');
      });
    done();
  });
});
