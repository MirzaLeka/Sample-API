const request = require('supertest');
const app = require('../../app');

describe('posts-controller', () => {

  const endpoint = '/api/posts';

  it('should create new post', async() => {
    await request(app)
      .post(`${endpoint}`)
      .send({
        title: 'Title',
        description: 'Description'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });


  it('should retrieve list of posts', async() => {
    const response = await request(app)
      .get(`${endpoint}`)
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(1);
  });


  it('should retrieve a single post', async() => {
    const response = await request(app)
      .get(`${endpoint}/1`)
      .expect('Content-Type', /json/)
      .expect(200);
    expect(typeof response.body).toEqual('object');
  });


  it('should fail if a post does not exist', async() => {
    await request(app)
      .get(`${endpoint}/999`)
      .expect('Content-Type', /json/)
      .expect(404);
  });


  it('should update post', async() => {
    await request(app)
      .put(`${endpoint}/1`)
      .send({
        title: 'Updated Title'
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });


  it('should delete a post', async() => {
    await request(app)
      .delete(`${endpoint}/1`)
      .expect('Content-Type', /json/)
      .expect(200);
  });


  it('should upload file', async() => {
    await request(app)
      .post(`${endpoint}/file/upload`)
      .expect(200);
  });


  it('should download file', async() => {
    await request(app)
      .post(`${endpoint}/file/download`)
      .expect('Content-Type', /text/)
      expect(404);
  });
      
});
