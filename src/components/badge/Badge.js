import React, {Component} from 'react';
import {StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Color from '../../commons/Colors'

export default class Badge extends Component {

    _isMax() {
        let {max, value} = this.props;
        return value > max ? 'max+' : value;
    }

    _showNumber() {
        let {showZero, value} = this.props;
        //dot默认false  默认显示数字
        return !showZero ?
            //showZero默认false  默认valve为0时不显示徽标
            value == 0 ?
                null
                :
                this._returnNumberView()
            :
            this._returnNumberView()

    }

    //返回数字标view
    _returnNumberView() {
        return (
            <View style={[styles.view, this.getPropsType()]}>
                <Text numberOfLines={1} style={[styles.text, this.getPropsTypeTextStyle()]}>{this._isMax()}</Text>
            </View>
        )
    }

    //显示红点
    _showOrigin() {
        let {showZero, value} = this.props;
        return !showZero ?
            //showZero默认false  默认valve为0时不显示徽标
            value == 0 ?
                null
                :
                this._returnRedView()
            :
            this._returnRedView()

    }

    //返回红点view
    _returnRedView() {
        return <View style={[styles.redText, this._getPropsTypeRedStyle()]}/>
    }

    //显示徽标
    _getPropsShow() {
        let {show, dot} = this.props;
        return show === true ?
            dot === true ?
                this._showOrigin()
                :
                this._showNumber()
            :
            //不显示徽标
            null
    }

    getPropsType() {
        let {type} = this.props;
        type = type == null ? 'default' : type;
        switch (type) {
            case 'default' :
                return styles.default;
            case 'primary' :
                return styles.primary;
            case 'success' :
                return styles.success;
            case 'warning' :
                return styles.warning;
            case 'danger' :
                return styles.danger;
        }
    }

    getPropsTypeTextStyle() {
        let {type} = this.props;
        switch (type) {
            case 'default' :
                return styles.defaultText;
            case 'primary' :
                return styles.primaryText;
            case 'success' :
                return styles.successText;
            case 'warning' :
                return styles.warningText;
            case 'danger' :
                return styles.dangerText;
        }
    }

    _getPropsTypeRedStyle() {
        let {type} = this.props;
        switch (type) {
            case 'default' :
                return styles.defaultRed;
            case 'primary' :
                return styles.primaryRed;
            case 'success' :
                return styles.successRed;
            case 'warning' :
                return styles.warningRed;
            case 'danger' :
                return styles.dangerRed;
        }
    }

    render() {
        const {style, children} = this.props;
        if (React.Children.count(children) > 0) {
            return (
                <View style={[{flexDirection: 'row'}, [style]]}>
                    {children}
                    {this._getPropsShow()}
                </View>
            )
        }
        return null;
    }
}

Badge.propTypes = {
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.number,
    show: PropTypes.bool,
    dot: PropTypes.bool,
    showZero: PropTypes.bool,
    style: ViewPropTypes.style,
};
Badge.defaultProps = {
    type: 'default',
    max: 99,
    show: true,
    dot: false,
    showZero: false,
    value: '+'
};

const styles = StyleSheet.create({
    view: {
        height: 18,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 9,
        position: 'relative',
        right: 12,  //TODO
        bottom: 9,
        borderWidth: 0.5,
        // transform: [{translate:[-10,10]}]
    },
    text: {
        fontSize: 12,
    },
    redText: {
        width: 8,
        height: 8,
        borderRadius: 4,
        position: 'relative',
        right: 4,  //TODO
        bottom: 4,
    },
    defaultRed: {backgroundColor: Color.red10},
    primaryRed: {backgroundColor: Color.primaryColor},
    successRed: {backgroundColor: Color.successColor},
    warningRed: {backgroundColor: Color.warningColor},
    dangerRed: {backgroundColor: Color.dangerColor},

    default: {backgroundColor: Color.white, borderColor: Color.defaultColor},
    primary: {backgroundColor: Color.primaryColor, borderColor: Color.primaryColor},
    success: {backgroundColor: Color.successColor, borderColor: Color.successColor},
    warning: {backgroundColor: Color.warningColor, borderColor: Color.warningColor},
    danger: {backgroundColor: Color.dangerColor, borderColor: Color.dangerColor},

    defaultText: {color: Color.black},
    primaryText: {color: Color.white},
    successText: {color: Color.white},
    warningText: {color: Color.white},
    dangerText: {color: Color.white},
})
