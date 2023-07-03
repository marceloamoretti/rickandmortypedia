import React, { memo, useCallback, useRef } from 'react';
import { Keyboard, Pressable, TextInput } from 'react-native';

import { theme } from '~components/ui/theme';

import styles from './styles';

interface Props {
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string | undefined;

  onSubmit?: () => void;
}

const Search = memo<Props>(({ onChangeText, placeholder, value, onSubmit }) => {
  const inputRef = useRef<TextInput>(null);
  const focusInput = useCallback(() => inputRef.current?.focus(), []);

  return (
    <Pressable style={styles.container} onPress={focusInput}>
      <TextInput
        ref={inputRef}
        onBlur={Keyboard.dismiss}
        style={styles.textInput}
        placeholderTextColor={theme.colors.grey300}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
    </Pressable>
  );
});

export default Search;
