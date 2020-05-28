import React from 'react';
import { useHistory } from 'react-router-dom';
import { PostWrapper, PostInfo, PostTitle } from './styles';

export interface PostProps {
  name: string;
  company: string;
  title: string;
  body: string;
  id: number;
}

function Post({ name, company, title, id }: PostProps) {
  const history = useHistory();

  return (
    <PostWrapper onClick={() => history.push(`/posts/${id}`)}>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <div>
          <h3>{`By: ${name}`}</h3>
          <small>{`- ${company}`}</small>
        </div>
      </PostInfo>
    </PostWrapper>
  );
}

export default Post;
