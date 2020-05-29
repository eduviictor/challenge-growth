import request from '../helpers';

describe('POSTS /posts', () => {
  describe('GET - INDEX', () => {
    it('should be return a list of posts with respective users', async () => {
      const response = await request.get('/posts');

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.status).toBe(200);
    });
  });
});
