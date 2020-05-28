import api from '../../config/api';
import { Response, Request } from 'express';

class PostController {
  async index(req: Request, res: Response): Promise<any> {
    const users = await api.get('/users');
    const posts = await api.get('/posts');

    const newPosts = posts.data.map((post) => {
      const userPost = users.data.find((user) => post.userId === user.id);
      return {
        name: userPost.name,
        company: userPost.company.name,
        ...post,
      };
    });

    return res.json(newPosts);
  }
}

export default new PostController();
