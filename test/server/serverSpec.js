//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server/index');
let should = chai.should();

chai.use(chaiHttp);

describe('Echo Server', () => {
   
  describe('/GET to echo', () => {
      it('it should respond with a status of 200 and say "Connected to the Echo Server!"', (done) => {
        chai.request(server)
            .get('/echo')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.be.eql('Connected to the Echo server!');
              done();
            });
      });
  });

   describe('/POST to echo', () => {
      it('it should respond with same message', (done) => {
        chai.request(server)
            .post('/echo')
            .send({data: 'This is a test message'})
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.be.eql('RECEIVED: This is a test message');
              done();
            });
      });

      it('it should respond with an empty if no message is sent', (done) => {
        chai.request(server)
            .post('/echo')
            .send({data: ''})
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.be.eql('');
              done();
            });
      });
  });

});