import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader';
import { PostContentContainer } from './styles';

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

export function Issue() {
  const [post, setPost] = useState<PostData>({} as PostData);
  const [isLoading, setIsLoading] = useState(true);

  const { issueNumber } = useParams();

  const getPost = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${profileUsername}/${repoName}/issues/${issueNumber}`
      );

      setPost(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContentContainer>
      <PostHeader postData={post} isLoading={isLoading} />

      <PostContent content={post.body} />
    </PostContentContainer>
  );
}
