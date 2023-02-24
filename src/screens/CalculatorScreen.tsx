import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { BtnCalc } from '../components/BtnCalc';
import { useCalculator } from '../hooks/useCalculator';

import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    number,
    topNumber,
    cleanBtn,
    toggleNegativeBtn,
    deleteBtn,
    buildNumber,
    divideBtn,
    multiplyBtn,
    subtractBtn,
    addBtn,
    calculateBtn,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.calContainer}>
      {topNumber !== '0' && <Text style={styles.smallResult}>{topNumber}</Text>}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Button Row */}
      <View style={styles.btnRow}>
        {/* Buttons */}
        <BtnCalc text="C" bgColor="#9B9B9B" action={cleanBtn} />
        <BtnCalc text="+/-" bgColor="#9B9B9B" action={toggleNegativeBtn} />
        <BtnCalc text="del" bgColor="#9B9B9B" action={deleteBtn} />
        <BtnCalc text="/" bgColor="#5856D6" action={divideBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.btnRow}>
        {/* Buttons */}
        <BtnCalc text="7" action={buildNumber} />
        <BtnCalc text="8" action={buildNumber} />
        <BtnCalc text="9" action={buildNumber} />
        <BtnCalc text="x" bgColor="#5856D6" action={multiplyBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.btnRow}>
        {/* Buttons */}
        <BtnCalc text="4" action={buildNumber} />
        <BtnCalc text="5" action={buildNumber} />
        <BtnCalc text="6" action={buildNumber} />
        <BtnCalc text="-" bgColor="#5856D6" action={subtractBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.btnRow}>
        {/* Buttons */}
        <BtnCalc text="1" action={buildNumber} />
        <BtnCalc text="2" action={buildNumber} />
        <BtnCalc text="3" action={buildNumber} />
        <BtnCalc text="+" bgColor="#5856D6" action={addBtn} />
      </View>

      {/* Button Row */}
      <View style={styles.btnRow}>
        {/* Buttons */}
        <BtnCalc text="0" btnWidth action={buildNumber} />
        <BtnCalc text="." action={buildNumber} />
        <BtnCalc text="=" bgColor="#5856D6" action={calculateBtn} />
      </View>
    </View>
  );
};
