import { useRef, useState } from 'react';
import { Alert } from 'react-native';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [topNumber, setTopNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const cleanBtn = () => {
    setNumber('0');
    setTopNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    // Do not accept double points
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Eval if is another 0 and there is a point
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // Eval if is different of 0 and not have a point
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Avoid 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const toggleNegativeBtn = () => {
    !number.includes('-')
      ? setNumber('-' + number)
      : setNumber(number.replace('-', ''));
  };

  const deleteBtn = () => {
    let negative = '';
    let tempNumber = number;

    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const numberToTopNumber = () => {
    !number.endsWith('.')
      ? setTopNumber(number)
      : setTopNumber(number.slice(0, -1));

    setNumber('0');
  };

  const divideBtn = () => {
    numberToTopNumber();
    lastOperation.current = Operators.divide;
  };

  const multiplyBtn = () => {
    numberToTopNumber();
    lastOperation.current = Operators.multiply;
  };

  const subtractBtn = () => {
    numberToTopNumber();
    lastOperation.current = Operators.subtract;
  };

  const addBtn = () => {
    numberToTopNumber();
    lastOperation.current = Operators.add;
  };

  const calculateBtn = () => {
    const num1 = Number(number);
    const num2 = Number(topNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        num1 !== 0
          ? setNumber(`${num2 / num1}`)
          : Alert.alert('Error', `Can't divide by zero!`);
        break;
    }

    setTopNumber('0');
  };

  return {
    topNumber,
    number,
    cleanBtn,
    buildNumber,
    toggleNegativeBtn,
    deleteBtn,
    divideBtn,
    multiplyBtn,
    subtractBtn,
    addBtn,
    calculateBtn,
  };
};
