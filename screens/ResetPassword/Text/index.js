import React from 'react';
import { Text as TextNative } from 'react-native';
const defaultText = '#000';
const primaryText = 'blue';
export const Text = (props) => {
    const style = props.style;
    let color = defaultText;
    if (style !== undefined) {
        delete props.style;
        if (style['color'] !== undefined)
            color = style['color'];
        if (props.primaryColor)
            color = primaryText;
    }
    return (React.createElement(TextNative, Object.assign({}, props, { style: Object.assign(Object.assign({}, style), { color: color }) })));
};
export default Text;