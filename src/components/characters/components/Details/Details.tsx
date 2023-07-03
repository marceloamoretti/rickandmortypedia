import React, { memo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView } from 'react-native';

import { Character } from '~components/characters/types';
import DefaultContainer from '~components/ui/components/DefaultContainer/DefaultContainer';
import { TextXLarge } from '~components/ui/components/Text';

import InformationSection from '../InformationSection/InformationSection';

import styles from './styles';

type Props = {
  character: Character;
};

const getEpisodesText = (count: number | null | undefined): string => {
  if (!count) return '0 episodes';
  if (count === 1) return '1 episode';
  return `${count} episodes`;
};

const Detail = memo<Props>(({ character }): ReactElement => {
  const { t } = useTranslation();

  const episodeCount = getEpisodesText(character.episode?.length);

  return (
    <DefaultContainer goBack>
      <ScrollView style={styles.container}>
        <Image source={character.mainImage} resizeMode="contain" style={styles.image} />
        <TextXLarge style={styles.characterName}>
          {character.name} {episodeCount && ` - ${episodeCount}`}
        </TextXLarge>
        <TextXLarge>{t('informations')}</TextXLarge>

        <InformationSection label="Gender" value={character.gender} />
        <InformationSection label="Status" value={character.status} />
        <InformationSection label="Species" value={character.species} />
        <InformationSection label="Origin" value={character.origin?.name} />
        <InformationSection label="Type" value={character.type ?? 'Unknown'} />
        <InformationSection label="Location" value={character.location?.name} />
      </ScrollView>
    </DefaultContainer>
  );
});

export default Detail;
