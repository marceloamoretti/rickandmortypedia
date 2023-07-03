import React, { memo, useState } from 'react';

import useCharacters from '~components/characters/api/hooks/useCharacters';
import List from '~components/characters/components/List/List';

const CharacterList = memo(() => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);
  const list = useCharacters({ name: searchInput });

  return <List list={list} searchInput={searchInput} setSearchInput={setSearchInput} />;
});

export default CharacterList;
