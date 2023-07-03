import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, View } from 'react-native';

import Empty from '~assets/icons/empty.png';
import Refresh from '~assets/icons/refresh.png';

import { TextXLarge } from '../Text';

import styles from './styles';

type Props = {
  isFetching: boolean;
  onRetry: () => void;
};

const EmptyList = memo<Props>(({ onRetry, isFetching }) => {
  const { t } = useTranslation();

  if (isFetching) return null;

  return (
    <Pressable style={styles.wrapper} onPress={onRetry}>
      <TextXLarge>{t('empty_list_title')}</TextXLarge>
      <View style={styles.imageWrapper}>
        <TextXLarge>{t('refresh')}</TextXLarge>
        <Image source={Refresh} style={styles.image} resizeMode="contain" />
      </View>
      <Image source={Empty} style={styles.emptyImage} resizeMode="contain" />
    </Pressable>
  );
});

export default EmptyList;
