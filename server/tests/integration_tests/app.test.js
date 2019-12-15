const request = require('supertest');
const app = require('../../app');

describe('app', () => {

  it('should return index.html page if we open wrong page', async() => {
    await request(app)
      .get('*')
      .expect('Content-Type', /html/)
      .expect(404);
  });
 
});
