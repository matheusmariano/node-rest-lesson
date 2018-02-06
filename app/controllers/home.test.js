const request = require('supertest');
const app = require('../providers/routing');

describe('HomeController', () => {
  test('index without subject', () => {
    return request(app).get('/api').then((response) => {
      expect(response.statusCode).toBe(200);

      expect(response.body).toEqual({
        data: {
          hello: 'world',
        },
      });
    });
  });

  test('index with subject', () => {
    const subject = 'guest';

    return request(app).get('/api').send({
      subject,
    }).then((response) => {
      expect(response.statusCode).toBe(200);

      expect(response.body).toEqual({
        data: {
          hello: subject,
        },
      });
    });
  });
});
