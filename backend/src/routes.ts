import { Router } from 'express';
import PostController from './app/controllers/PostController';

const routes = Router();

routes.get('/posts', PostController.index);

export default routes;
