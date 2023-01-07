import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchBarContainer } from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchBarProps {
  getPosts: (query?: string) => Promise<void>;
}

export function SearchBar({ getPosts }: SearchBarProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    getPosts(data.query);
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchBarContainer>
  );
}
