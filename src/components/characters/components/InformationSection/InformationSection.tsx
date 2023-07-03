import React, { memo, ReactElement } from 'react';
import { View } from 'react-native';

import { TextLarge, TextMedium } from '~components/ui/components/Text';

import styles from './styles';

interface IProps {
  label: string;
  value: string | undefined;
}

const InformationSection = memo<IProps>(({ label, value }): ReactElement => {
  return (
    <View style={styles.container}>
      <TextLarge inverted>{label}</TextLarge>
      <TextMedium>{value}</TextMedium>
      <View style={styles.divider} />
    </View>
  );
});

export default InformationSection;
