/* eslint-disable react-memo/require-usememo */
import React, { memo, useCallback, useMemo } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { UseInfiniteQueryResult } from '@tanstack/react-query';

import { Character, CharacterList } from '~components/characters/types';
import Search from '~components/ui/components/Search/Search';
import { theme } from '~components/ui/theme';
import { assignKeyExtractor } from '~utils/keyExtractor';

import DefaultContainer from '../DefaultContainer/DefaultContainer';
import ListItem from '../ListItem/ListItem';

import styles from './styles';

type Props = {
  list: UseInfiniteQueryResult<CharacterList, Error>;
  searchInput: string | undefined;
  setSearchInput: (value: string) => void;
};

const LIST_INITIAL_NUM_TO_RENDER = 20;

const renderItem: ListRenderItem<Character> = ({ item }) => <ListItem character={item} />;

const CharactersList = memo<Props>(({ list, searchInput, setSearchInput }) => {
  const { data, hasNextPage, isFetching, isFetchingNextPage, isLoading, fetchNextPage, refetch } =
    list;

  const characters = useMemo(
    () => data?.pages.reduce<Character[]>((acc, cur) => [...acc, ...cur.results], []),
    [data?.pages]
  );

  return (
    <DefaultContainer>
      <FlatList
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator
              style={styles.bottomActivityIndicator}
              size="large"
              color={theme.colors.white}
            />
          ) : undefined
        }
        ListHeaderComponent={
          <Search
            placeholder="Search your character"
            onChangeText={setSearchInput}
            value={searchInput}
          />
        }
        numColumns={2}
        data={characters}
        renderItem={renderItem}
        keyExtractor={assignKeyExtractor}
        onRefresh={refetch}
        refreshing={isFetching && !isLoading}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        initialNumToRender={LIST_INITIAL_NUM_TO_RENDER}
        onEndReached={useCallback(() => {
          if (!hasNextPage || isFetchingNextPage) return;

          void fetchNextPage();
        }, [hasNextPage, fetchNextPage, isFetchingNextPage])}
      />
    </DefaultContainer>
  );
});

export default CharactersList;
