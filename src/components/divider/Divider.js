import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import Colors from "../../commons/Colors";

const {height, width} = Dimensions.get('window');

export default class Divider extends Component {

    _getPropsTitlePosition() {
        let {titlePosition} = this.props;
        if (titlePosition === 'center') {
            return {justifyContent: 'center'}
        } else if (titlePosition === 'left') {
            return {justifyContent: 'flex-start'}
        } else if (titlePosition === 'right') {
            return {justifyContent: 'flex-end'}
        }
    }

    //虚线的短线横竖样式
    _getPropsTypeStyle() {
        let {type} = this.props;
        return type === 'horizontal' ?
            styles.hLine
            :
            styles.vLine
    }

    //竖向虚线
    _createVFuzzyLine() {
        let {style} = this.props;
        let number;
        if (style != null) {
            number = style.height === undefined ? height / 9 : style.height / 9
        } else {
            number = height / 9
        }
        let fuzzyLineAyy = [];
        for (let i = 0; i < number; i++) {
            fuzzyLineAyy.push(
                <View key={i} style={[this._getPropsTypeStyle(), this._getPropsColor()]}/>
            )
        }
        return fuzzyLineAyy
    }

    //横向虚线
    _createHFuzzyLine() {
        let {style} = this.props;
        let number;
        if (style != null) {
            number = style.width === undefined ? width / 9 : style.width / 9
        } else {
            number = width / 9
        }
        let fuzzyLineAyy = [];
        for (let i = 0; i < number; i++) {
            fuzzyLineAyy.push(
                <View key={i} style={[this._getPropsTypeStyle(), this._getPropsColor()]}/>
            )
        }
        return fuzzyLineAyy
    }

    _getPropsTitle() {
        let {children, type} = this.props;
        return type === 'vertical' ? null
            :
            children == null ?
                null
                :
                <View style={[styles.views, this._getPropsTitlePosition()]}>
                    <Text style={[styles.textStyle, this._getPropsTextColor()]}>{children}</Text>
                </View>
    }

    //实线还是虚线 返回视图
    _getPropsDashed() {
        let {dashed, type} = this.props;
        return dashed === false ?
            <View style={[this._getPropsType(), this._getPropsColor()]}/>
            :
            type === 'horizontal' ?
                this._createHFuzzyLine()
                :
                this._createVFuzzyLine();
    }

    //横向竖向 返回根布局style
    _getPropsType() {
        let {type} = this.props;
        return type === 'horizontal' ?
            {height: 1, width: '100%', flexDirection: 'row'}
            :
            {height: '100%', width: 1, flexDirection: 'column'}

    }

    render() {
        let {style} = this.props;
        return (
            <View style={[{flexDirection: 'column'}, style]}>
                <View style={[styles.view, this._getPropsType()]}>{this._getPropsDashed()}</View>
                {this._getPropsTitle()}
            </View>
        );
    }

    //线的颜色
    _getPropsColor() {
        let {color} = this.props;
        return {backgroundColor: color}
    }

    //字体颜色
    _getPropsTextColor() {
        let {color} = this.props;
        return {color: color}
    }
};

Divider.defaultProps = {
    type: 'horizontal',
    dashed: false,
    color: '#e5e5e5',
    titlePosition: 'center',
};

Divider.propTypes = {
    type: PropTypes.string,  //默认：horizontal  可选：horizontal/vertical
    dashed: PropTypes.bool,  //默认 fales
    color: PropTypes.string, //分割线颜色 ，没有title时有效
    titlePosition: PropTypes.string,     //默认center ，可选center/left/right
    style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    },
    hLine: {
        height: 1, width: 5, marginLeft: 2, marginRight: 2
    },
    vLine: {
        height: 5, width: 1, marginTop: 2, marginBottom: 2
    },
    textStyle: {
        width: 50,
        textAlign: 'center',
        backgroundColor: Colors.white,
    },
    views: {
        marginLeft: '12%',
        marginRight: '12%',
        backgroundColor: Colors.NAMED_Colors.whiteAlpha0,
        position: 'relative',
        bottom: 10,
        flexDirection: 'row',
    }
});