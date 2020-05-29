import axios from 'axios';

import { PostProps } from '../components/Post';

const api = axios.create({
  baseURL: process.env.apiUrl || 'http://localhost:3001',
});

export const getPosts = async (): Promise<Array<PostProps>> => {
  const { data } = await api.get('/posts');
  return data;
};

export default api;
