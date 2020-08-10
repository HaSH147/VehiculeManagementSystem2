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
import { View, TextInput as TextInputNative } from 'react-native';
import { styles } from './styles';
import { ErrorMessage } from './ErrorMessage';
import { InputLabel } from './InputLabel';
export const TextInput = (props) => {
    const { name, label } = props, rest = __rest(props, ["name", "label"]);
    return (React.createElement(React.Fragment, null,
        label !== undefined &&
            React.createElement(InputLabel, { label: label }),
        React.createElement(View, { style: styles.inputWrap },
            React.createElement(TextInputNative, Object.assign({}, rest))),
        React.createElement(ErrorMessage, { name: name })));
};
export default TextInput;