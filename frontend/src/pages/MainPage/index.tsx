import React, { useState, ChangeEvent, useEffect } from 'react';
import { MainWrapper } from './styles';
import Search from '../../components/Search';
import ListPosts from '../../components/ListPosts';
import { PostProps } from '../../components/Post';
import Pagination from '../../components/Pagination';

interface MainProps {
  posts: Array<PostProps>;
}

function Main({ posts }: MainProps) {
  const [value, setValue] = useState<string>('');
  const [postsFilter, setPostsFilter] = useState<Array<PostProps>>([]);
  const [page, setPage] = useState<number>(1);
  const [numberPages, setNumberPages] = useState(1);

  const postsPerPage = 5;
  const init = page * postsPerPage - postsPerPage;
  const end = page * postsPerPage;

  function filterPosts(array: Array<PostProps>, valueFilter: string): void {
    const newPosts = array.filter((post) =>
      post.title.toLowerCase().includes(valueFilter.toLowerCase())
    );

    setPostsFilter(newPosts);
    setNumberPages(Math.ceil(newPosts.length / postsPerPage));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e?.target?.value);
    filterPosts(posts, e?.target?.value);
    setPage(1);
  }

  useEffect(() => {
    setPostsFilter(posts);
    setNumberPages(Math.ceil(posts.length / postsPerPage));
  }, [posts]);

  function prev(): void {
    if (page !== 1) {
      setPage(page - 1);
      filterPosts(posts, value);
    }
  }

  function next(): void {
    if (page < numberPages) {
      setPage(page + 1);
      filterPosts(posts, value);
    }
  }

  return (
    <MainWrapper>
      <Search handleChange={handleChange} value={value} />
      {postsFilter && (
        <ListPosts posts={postsFilter.slice(init, end)} input={value} />
      )}
      <Pagination
        page={page}
        prev={prev}
        next={next}
        numberPages={numberPages === 0 ? 1 : numberPages}
      />
    </MainWrapper>
  );
}

export default Main;
