import { formatDate } from '../../../../utils/formatter';
import { PostContainer } from './styles';

interface PostData {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

interface PostProps {
  post: PostData;
}

export function Post({ post }: PostProps) {
  const formattedDate = formatDate(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <header>
        <h2>{post.title}</h2>
        <span>{formattedDate}</span>
      </header>

      <p>{post.body}</p>
    </PostContainer>
  );
}
