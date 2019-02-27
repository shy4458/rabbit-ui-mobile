import React from 'react';
import { View } from 'react-native';

class Button extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View {...this.props}>
                Button
            </View>
        );
    }

}

module.exports = Button;
