import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PostPageWrapper, PostPageContent, PostPageInfo } from './styles';
import { PostProps } from '../../components/Post';

interface PostPageProps {
  posts: Array<PostProps>;
}

function PostPage({ posts }: PostPageProps) {
  const { postId } = useParams();
  const history = useHistory();
  const post: PostProps | undefined = posts.find(
    (postItem) => postItem.id === Number(postId)
  );

  return (
    <PostPageWrapper>
      {post && (
        <PostPageContent>
          <h1>{post.title}</h1>
          <hr />
          <p>{post.body}</p>
          <PostPageInfo>
            <div>
              <h3>{post.name}</h3>
              <small>{post.company}</small>
            </div>
            <button onClick={() => history.goBack()} type="button">
              Come back
            </button>
          </PostPageInfo>
        </PostPageContent>
      )}
    </PostPageWrapper>
  );
}

export default PostPage;
