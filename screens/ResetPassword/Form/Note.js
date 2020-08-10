import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
export const Note = (props) => {
    const { note } = props;
    return (React.createElement(Text, { style: styles.noteText }, note));
};
export default Note;