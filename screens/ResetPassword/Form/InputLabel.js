import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
export const InputLabel = (props) => {
    const { label } = props;
    return (React.createElement(Text, { style: styles.inputLabel }, label));
};
export default InputLabel;