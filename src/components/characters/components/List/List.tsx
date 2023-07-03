/* eslint-disable react-memo/require-usememo */
import React, { memo, useCallback, useMemo, useRef } from 'react';
import { FlatList, Image, ListRenderItem, TouchableOpacity } from 'react-native';
import { UseInfiniteQueryResult } from '@tanstack/react-query';

import ArrowUp from '~assets/icons/arrow-up.png';
import { Character, CharacterList } from '~components/characters/types';
import EmptyList from '~components/ui/components/EmptyList/EmptyList';
import Search from '~components/ui/components/Search/Search';
import { assignKeyExtractor } from '~utils/keyExtractor';

import DefaultContainer from '../DefaultContainer/DefaultContainer';
import ListItem from '../ListItem/ListItem';
import Loader from '../Loader/Loader';

import styles from './styles';

type Props = {
  list: UseInfiniteQueryResult<CharacterList, Error>;
  searchInput: string | undefined;
  setSearchInput: (value: string) => void;
};

const LIST_INITIAL_NUM_TO_RENDER = 20;

const renderItem: ListRenderItem<Character> = ({ item }) => <ListItem character={item} />;

const CharactersList = memo<Props>(({ list, searchInput, setSearchInput }) => {
  const flatListRef = useRef<FlatList>(null);
  const { data, hasNextPage, isFetching, isFetchingNextPage, isLoading, fetchNextPage, refetch } =
    list;

  const characters = useMemo(
    () => data?.pages.reduce<Character[]>((acc, cur) => [...acc, ...cur.results], []),
    [data?.pages]
  );

  const goToTop = useCallback(
    () => flatListRef.current?.scrollToOffset({ animated: true, offset: 0 }),
    []
  );

  return (
    <DefaultContainer>
      <FlatList
        ref={flatListRef}
        ListFooterComponent={isFetchingNextPage ? <Loader /> : undefined}
        ListEmptyComponent={
          isFetching ? <Loader /> : <EmptyList isFetching={isFetching} onRetry={refetch} />
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
      <TouchableOpacity onPress={goToTop} style={styles.topTouchable}>
        <Image source={ArrowUp} style={styles.topIcon} />
      </TouchableOpacity>
    </DefaultContainer>
  );
});

export default CharactersList;
