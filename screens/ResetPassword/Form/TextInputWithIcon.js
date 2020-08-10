var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ErrorMessage } from './ErrorMessage';
export const TextInputWithIcon = (props) => {
    const { ionIcon, name } = props, rest = __rest(props, ["ionIcon", "name"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: styles.inputWrap },
            React.createElement(View, { style: styles.inputIcon },
                React.createElement(Ionicons, { name: ionIcon, size: 25, color: '#ccc' })),
            React.createElement(TextInput, Object.assign({}, rest))),
        React.createElement(ErrorMessage, { name: name })));
};
export default TextInputWithIcon;