import React from 'react';
import { ListPostsWrapper } from './styles';
import Post, { PostProps } from '../Post';

export interface ListPostsProps {
  posts: Array<PostProps>;
  input: string;
}

function ListPosts({ posts }: ListPostsProps) {
  return (
    <ListPostsWrapper>
      {posts.map(({ name, body, title, company, id }) => (
        <Post
          name={name}
          body={body}
          company={company}
          title={title}
          key={id}
          id={id}
        />
      ))}
    </ListPostsWrapper>
  );
}

export default ListPosts;
