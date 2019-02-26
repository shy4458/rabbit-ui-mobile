import React, {Component} from 'react';
import {StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Color from './commons/Colors'


export default class Badge extends Component {

    getPropsValue() {
        let {value} = this.props;
        value = value == null ? '' : value;
        if (value === 0) {
            return this.getPropsShowZero() ? value : '';
        }
        return this.getPropsMax()
    }

    getPropsMax() {
        let {value, max} = this.props;
        max = max == null ? 99 : max;
        if (value > max) {
            return 'max+'
        } else {
            return value;
        }
    }

    getPropsShow() {
        let {show, value} = this.props;
        show = show == null ? true : show;
        if (show === true) {
            if (value === 0) {
                if (this.getPropsShowZero())
                    return this.getPropsDot()
            } else {
                return this.getPropsDot()
            }
        }
    }

    getPropsDot() {
        let {dot} = this.props;
        dot = dot == null ? false : dot;
        if (dot === false) {
            return (
                <View style={[styles.view, this.getPropsType()]}>
                    <Text style={[styles.text,this.getPropsTypeTextStyle()]}>{this.getPropsValue()}</Text>
                </View>
            )
        } else {
            return (<View style={[styles.redText, this.getPropsType()]}/>)
        }
    }

    getPropsShowZero() {
        let {showZero} = this.props;
        return showZero = showZero == null ? false : showZero;
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
    getPropsTypeTextStyle(){
        let {type} = this.props;
        type = type == null ? 'default' : type;
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


    render() {
        const {type,       //设置Badge类型 , stirng , 默认·default , 可选 default/primary/success,
            value,         //Badge上现实的值 , string/number
            max,        //如果你设置的value为数字，当value超过max时会显示为 'max+', number , 最大值 99
            show,       //设置是否显示 Badge , boo , 默认·true , 可选 true/f
            dot,        //设置是否显示为小圆点 , boo , 默认·false , 可选 true/f
            showZero,   //设置当value为0时，是否显示Badge,bool,  默认 f  , true/false,
            style,
            children} = this.props;
        if (React.Children.count(children) > 0) {
            return (
                <View style={[{flexDirection: 'row'}, [style]]}>
                    {children}
                    {this.getPropsShow()}
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

const styles = StyleSheet.create({
    view: {
        height: 18,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 9,
        position: 'relative',
        right: 12,  //TODO
        bottom: 9,
        backgroundColor: '#FFFFFF',
        borderColor: '#dddddd',
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