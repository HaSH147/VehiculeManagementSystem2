import React from 'react';
import { View, Text } from 'react-native';
import { ErrorMessage as ErrorMessageFormik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
export const ErrorMessage = (props) => {
    const { name } = props;
    return (React.createElement(ErrorMessageFormik, { name: name }, msg => React.createElement(View, { style: styles.error },
        React.createElement(Ionicons, { name: 'ios-warning', size: 22, style: styles.errorIcon }),
        React.createElement(Text, { style: styles.errorText }, msg))));
};
export default ErrorMessage;