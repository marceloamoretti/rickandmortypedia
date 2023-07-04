import React, { memo, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import useCharacters from '~components/characters/api/hooks/useCharacters';
import List from '~components/characters/components/List/List';

const CharacterList = memo(() => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);
  const list = useCharacters({ name: searchInput });

  const handleSplash = async (): Promise<void> => {
    await RNBootSplash.hide({ fade: true, duration: 500 });
  };

  useEffect(() => {
    void handleSplash();
  }, []);

  return <List list={list} searchInput={searchInput} setSearchInput={setSearchInput} />;
});

export default CharacterList;
