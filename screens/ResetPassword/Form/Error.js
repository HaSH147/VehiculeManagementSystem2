import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
export const Error = (props) => {
    const { error } = props;
    if (error === null) {
        return (React.createElement(React.Fragment, null));
    }
    return (React.createElement(View, { style: styles.error },
        React.createElement(Ionicons, { name: 'ios-warning', size: 22, style: styles.errorIcon }),
        React.createElement(Text, { style: styles.errorText }, error)));
};
export default Error;
 