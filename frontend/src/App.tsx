import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import { PostProps } from './components/Post';
import { getPosts } from './services/api';

function App() {
  const [posts, setPosts] = useState<Array<PostProps> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    getData();
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            {posts && <MainPage posts={posts} />}
          </Route>
          <Route path="/posts/:postId">
            {posts && <PostPage posts={posts} />}
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
