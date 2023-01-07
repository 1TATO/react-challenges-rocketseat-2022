import { useCallback, useEffect, useState } from 'react';

import { Postslist, PublishedPosts } from './styles';
import { SearchBar } from './components/SearchForm';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { api } from '../../lib/axios';

interface PostData {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

const profileUsername = '1TATO';
const repoName = 'react-challenges-rocketseat-2022';

export function Home() {
  const [posts, setPosts] = useState<PostData[]>([]);

  const getPosts = useCallback(async (query: string = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${profileUsername}/${repoName}`,
      },
    });

    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />

      <PublishedPosts>
        <div>
          <h2>Publicações</h2>
          <span>{posts.length}</span>
        </div>

        <SearchBar getPosts={getPosts} />

        <Postslist>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </Postslist>
      </PublishedPosts>
    </>
  );
}
