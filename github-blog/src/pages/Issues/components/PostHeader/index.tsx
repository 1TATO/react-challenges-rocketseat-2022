import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faCalendarDay,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/formatter';
import { PostHeaderContainer } from './styles';

interface PostData {
  title: string;
  created_at: string;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface PostDataProps {
  postData: PostData;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostDataProps) {
  const formattedDate = formatDate(postData.created_at);

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <h1>Carregando</h1>
      ) : (
        <>
          <div>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
              VOLTAR
            </Link>

            <a href={postData.html_url}>
              VER NO GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
}
