/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import server from '../server';


dotenv.config();

chai.use(chaiHttp);
chai.should();
// const { expect } = chai;

describe('messages', () => {
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
  it('should be able to get all messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages')
      .end((err, res) => {
        if (err) {
          res.should.have.status(404);
        } else {
          res.body.should.be.an('object');
        }
      });
    done();
  });
  it('should get all unread messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/unread')
      .end((err, res) => {
        res.body.should.be.an('object');
      });
    done();
  });
  it('should be able to get sent messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/sent')
      .end((err, res) => {
        res.body.should.be.an('object');
      });
    done();
  });
  it('should be able to get read messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/read')
      .end((err, res) => {
        res.body.should.be.an('object');
      });
    done();
  });
  it('should be able to get draft messages', (done) => {
    chai.request(server)
      .get('/api/v1/messages/draft')
      .end((err, res) => {
        res.body.should.be.an('object');
      });
    done();
  });
  it('should be able to get a specific message', (done) => {
    chai.request(server)
      .get('/api/v1/messages/:id')
      .end((err, res) => {
        res.body.should.be.an('object');
      });
    done();
  });
  it('should be able to delete a specific message', (done) => {
    chai.request(server)
      .delete('/api/v1/messages/:id')
      .end((err, res) => {
        if (err) {
          res.should.have.status(404);
        }
        res.body.should.be.an('object');
      });
    done();
  });
});
