import { QueryFunction, useInfiniteQuery } from '@tanstack/react-query';

import { defaultApi } from '~components/api/api';
import { CharacterList, CharacterListScheme } from '~components/characters/types';
import { queryStringExtractor } from '~utils/keyExtractor';
import useDebounce from '~utils/timers/useDebounce';

import { characterQueryKey } from '../keyfactory';
import { parseCharacters } from '../parsers';

type Props = {
  name: string | undefined;
};

type Key = ReturnType<typeof characterQueryKey.characters>;

const getCharacters: QueryFunction<CharacterList, Key> = async ({
  queryKey: [, { name }],
  pageParam = 1,
}) => {
  const { data } = await defaultApi.get<CharacterListScheme>('/character', {
    params: { name, page: pageParam },
  });

  return {
    info: data.info,
    results: parseCharacters(data.results),
  };
};

const useCharacters = ({ name }: Props) => {
  const nameDebounce = useDebounce(name, 500);
  const query = useInfiniteQuery<CharacterList, Error, CharacterList, Key>(
    characterQueryKey.characters({ name: nameDebounce }),
    getCharacters,
    {
      getNextPageParam: lastPage => queryStringExtractor(lastPage.info.next),
    }
  );

  return query;
};

export default useCharacters;
