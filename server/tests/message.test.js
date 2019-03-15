/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

chai.use(chaiHttp);
chai.should();
// const { expect } = chai;

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

// describe('get all messages', () => {
//   it.only('should be able to get all messages', (done) => {
//     chai.request(server)
//       .get('/api/v1/messages')
//       .end((err, res) => {
//         res.body.should.have.status(200);
//         res.body.should.be.an('object');
//       });
//     done();
//   });
// });
