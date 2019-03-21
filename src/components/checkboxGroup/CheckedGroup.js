import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import PropTypes from 'prop-types';

export default class CheckedGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: this.props.value,
            valuesArr: []
        }
    }

    getChildContext() {
        return {
            checkBoxGroup: {
                value: this.state.values,
                disabled: this.props.disabled,
                name: this.props.name,
                onChange: this._handleOnChange
            }
        };
    }

    _handleOnChange = (value, event) => {
        let {onChange} = this.props;

        let indexOf = this.state.valuesArr.indexOf(value);
        if (indexOf === -1) {
            this.state.valuesArr.push(value)
        } else if (indexOf > -1) {
            this.state.valuesArr.splice(indexOf, 1)
        }

        if (!!onChange) {
            onChange(this.state.valuesArr, event)
        }
    };

    render() {
        let {children} = this.props;
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }
}

CheckedGroup.propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.string,
    name: PropTypes.string,

};

CheckedGroup.defaultProps = {
    disabled: false,
    value: '',
    name: '',
};

CheckedGroup.childContextTypes = {
    checkBoxGroup: PropTypes.any,
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
