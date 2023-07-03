import React, { memo, ReactElement } from 'react';

import Detail from '~components/characters/components/Details/Details';
import { AppScreenProps } from '~components/navigation/types';

const CharacterDetails = memo<AppScreenProps<'character_details'>>(
  ({
    route: {
      params: { character },
    },
  }): ReactElement => {
    return <Detail character={character} />;
  }
);

export default CharacterDetails;
