import React, { memo } from 'react';

import useCharacters from '~components/characters/api/hooks/useCharacters';
import List from '~components/characters/components/List/List';

const CharacterList = memo(() => {
  const list = useCharacters({ name: '' });

  return <List list={list} />;
});

export default CharacterList;
