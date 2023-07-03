import React, { memo, ReactElement, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Alive from '~assets/icons/alive.png';
import Dead from '~assets/icons/dead.png';
import Unknown from '~assets/icons/unknown.png';
import { Character } from '~components/characters/types';
import useNavigation from '~components/navigation/hooks/useNavigation';
import { TextLarge, TextSmall } from '~components/ui/components/Text';

import styles from './styles';

interface IProps {
  character: Character;
}

const statusImages = {
  Alive,
  Dead,
  unknown: Unknown,
};

const CharacterImage = memo<Pick<Character, 'mainImage'>>(({ mainImage }) => {
  return <FastImage source={mainImage} style={styles.characterImage} />;
});

const StatusImage = memo<Pick<Character, 'status'>>(({ status }) => {
  const imageSource = statusImages[status] || Unknown;

  return <Image source={imageSource} style={styles.statusImage} resizeMode="contain" />;
});

const Info = memo<Omit<IProps, 'onPress'>>(({ character }) => (
  <View style={styles.characterInfo}>
    <TextLarge inverted style={styles.title}>
      {character.name}
    </TextLarge>
    <View style={styles.separator} />
    <StatusImage status={character.status} />
    <View style={styles.basicInfo}>
      <TextSmall inverted numberOfLines={1} style={styles.basicInfoText}>
        {character.species}
      </TextSmall>
      <TextSmall inverted numberOfLines={1} style={styles.basicInfoText}>
        {character.gender}
      </TextSmall>
    </View>
  </View>
));

const ListItem = memo<IProps>(({ character }): ReactElement => {
  const { navigate } = useNavigation();

  const onPress = useCallback(
    () => navigate('character_details', { character }),
    [character, navigate]
  );

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <CharacterImage mainImage={character.mainImage} />
      <Info character={character} />
    </Pressable>
  );
});

export default ListItem;
