import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  bgColor?: string;
  btnWidth?: boolean;
  action: (arg: string) => void;
}

export const BtnCalc = ({
  text,
  bgColor = '#2D2D2D',
  btnWidth = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.55} onPress={() => action(text)}>
      <View
        style={{
          ...styles.btn,
          backgroundColor: bgColor,
          width: btnWidth ? 180 : 80,
        }}>
        {text === 'backspace-outline' ? (
          <Icon
            name={text}
            style={{
              ...styles.btnText,
              color: bgColor === '#9B9B9B' ? 'black' : 'white',
            }}
          />
        ) : (
          <Text
            style={{
              ...styles.btnText,
              color: bgColor === '#9B9B9B' ? 'black' : 'white',
            }}>
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
