import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes} from 'react-native';
import PropTypes from "prop-types";
import Color from "../../commons/Colors";

let X = 0;
let Y = 0;
export default class Tooltip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    _measure() {
        this.refs.v.measure((a, b, width, height, pageX, pageY) => {
                console.log("measure" + a, b, width, height, pageX, pageY);
                X = pageX;
                Y = pageY;
            }
        );
    }

    render() {
        let {children} = this.props;
        return (
            <TouchableOpacity ref={'v'} style={{width: children.props.style.width, height: children.props.style.height}}
                              onPress={() => {
                                  this._measure();
                                  setTimeout(
                                      () => {
                                          this.setState({show: true})
                                      },
                                      200
                                  );
                              }}>
                {children}
                {this._showWindows()}
            </TouchableOpacity>
        );
    }

    //确定左上右下显示
    _getPropsLTRB() {
        let {position, children} = this.props;
        let width = children.props.style.width;
        let height = children.props.style.height;
        switch (position) {
            case 'top' :
                return {marginTop: Y - 40 - 18, marginLeft: X};
            case 'top-left' :
                return {marginTop: Y - 40 - 18, marginLeft: X};
            case 'top-right' :
                return {marginTop: Y - 40 - 18, marginLeft: X};
            case 'right' :
                return {marginTop: Y + (height - 40) / 2};
            case 'right-top' :
                return {marginTop: Y};
            case 'right-bottom' :
                return {marginTop: Y + height - 40};
            case 'bottom' :
                return {marginLeft: X};
            case 'bottom-left' :
                return {marginLeft: X};
            case 'bottom-right' :
                return {marginLeft: X};
            case 'left' :
                return {marginLeft: X - width - 18, marginTop: Y + (height - 40) / 2};
            case 'left-top' :
                return {marginLeft: X - width - 18, marginTop: Y};
            case 'left-bottom' :
                return {marginLeft: X - width - 18, marginTop: Y + height - 40};
        }
    }

    //弹出的窗口
    _showWindows() {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.show}
                onDismiss={false}
                onRequestClose={() => {
                    this.setState({
                        show: false
                    });
                }}>
                <TouchableOpacity
                    style={[styles.modalView, this._getPropsHV()]}
                    onPress={() => {
                        this.setState({
                            show: false
                        })
                    }}>
                    {this._returnArray()}
                </TouchableOpacity>
            </Modal>
        )
    }

    _getPropsHV() {
        let {position} = this.props;
        let str = position.substr(0, 1);
        switch (str) {
            case 't':
            case 'b':
                return {flexDirection: 'column'};
            case 'l':
            case 'r':
                return {flexDirection: 'row'}
        }
    }

    _getPropsArrow() {
        let {position, children} = this.props;
        let width = children.props.style.width;
        let height = children.props.style.height;
        switch (position) {
            case 'top' :
                return [styles.windowTop, {marginLeft: X, width: children.props.style.width, alignItems: 'center'}];
            case 'top-left' :
                return [styles.windowTop, {marginLeft: X, width: children.props.style.width, alignItems: 'flex-start'}];
            case 'top-right' :
                return [styles.windowTop, {marginLeft: X, width: children.props.style.width, alignItems: 'flex-end'}];
            case 'right' :
                return [styles.windowRight, {
                    marginTop: Y,
                    marginLeft: X + width, height: children.props.style.height, justifyContent: 'center'
                }];
            case 'right-top' :
                return [styles.windowRight, {
                    marginTop: Y,
                    marginLeft: X + width, height: children.props.style.height, justifyContent: 'flex-start'
                }];
            case 'right-bottom' :
                return [styles.windowRight, {
                    marginTop: Y,
                    marginLeft: X + width, height: children.props.style.height, justifyContent: 'flex-end'
                }];
            case 'bottom' :
                return [styles.windowBottom, {
                    marginTop: Y + height,
                    marginLeft: X, width: children.props.style.width, alignItems: 'center'
                }];
            case 'bottom-left' :
                return [styles.windowBottom, {
                    marginTop: Y + height,
                    marginLeft: X, width: children.props.style.width, alignItems: 'flex-start'
                }];
            case 'bottom-right' :
                return [styles.windowBottom, {
                    marginTop: Y + height,
                    marginLeft: X, width: children.props.style.width, alignItems: 'flex-end'
                }];
            case 'left' :
                return [styles.windowLeft, {
                    marginTop: Y,
                    height: children.props.style.height,
                    justifyContent: 'center'
                }];
            case 'left-top' :
                return [styles.windowLeft, {
                    marginTop: Y,
                    height: children.props.style.height,
                    justifyContent: 'flex-start'
                }];
            case 'left-bottom' :
                return [styles.windowLeft, {
                    marginTop: Y,
                    height: children.props.style.height,
                    justifyContent: 'flex-end'
                }];
        }
    }

    _getPropsText() {
        let {text} = this.props;
        return text
    }

    _getPropsWindowsStyle() {
        let {style} = this.props;
        return style;
    }

    _returnArray() {
        let {position, children} = this.props;
        let str = position.substr(0, 1);
        let arrComponent = [];
        switch (str) {
            case 't':
                arrComponent.push(
                    <View key={'t1'}
                          style={[styles.view, {width: children.props.style.width}, this._getPropsLTRB(), this._getPropsWindowsStyle()]}>
                        <Text opacity={1} style={{color: '#FFFFFF'}}>{this._getPropsText()}</Text>
                    </View>
                );
                arrComponent.push(
                    <View key={'t2'} style={this._getPropsArrow()}>
                        <View style={styles.bottom}/>
                    </View>
                );
                return arrComponent;
            case 'l':
                arrComponent.push(
                    <View key={'l1'}
                          style={[styles.view, {width: children.props.style.width}, this._getPropsLTRB(), this._getPropsWindowsStyle()]}>
                        <Text opacity={1} style={{color: '#FFFFFF'}}>{this._getPropsText()}</Text>
                    </View>
                );
                arrComponent.push(
                    <View key={'l2'} style={this._getPropsArrow()}>
                        <View style={styles.right}/>
                    </View>
                );
                return arrComponent;
            case 'r':
                arrComponent.push(
                    <View key={'r1'} style={this._getPropsArrow()}>
                        <View style={styles.left}/>
                    </View>
                );
                arrComponent.push(
                    <View key={'r2'}
                          style={[styles.view, {width: children.props.style.width}, this._getPropsLTRB(), this._getPropsWindowsStyle()]}>
                        <Text opacity={1} style={{color: '#FFFFFF'}}>{this._getPropsText()}</Text>
                    </View>
                );
                return arrComponent;
            case 'b':
                arrComponent.push(
                    <View key={'b1'} style={this._getPropsArrow()}>
                        <View style={styles.top}/>
                    </View>
                );
                arrComponent.push(
                    <View key={'b2'}
                          style={[styles.view, {width: children.props.style.width}, this._getPropsLTRB(), this._getPropsWindowsStyle()]}>
                        <Text opacity={1} style={{color: '#FFFFFF'}}>{this._getPropsText()}</Text>
                    </View>
                );
                return arrComponent;
        }
    }
}

Tooltip.propTypes = {
    text: PropTypes.any,        //显示的文字
    position: PropTypes.string, //默认top  //top/top-left/top-right/right/right-top/right-bottom/bottom/bottom-left/bottom-right/left/left-top/left-bottom
    trigger: PropTypes.string,   //click
    style: ViewPropTypes.style, //弹出框的样式，但不包括箭头
};
Tooltip.defaultProps = {
    text: 'Tooltip',
    position: 'top',
    trigger: 'click',
};

const styles = StyleSheet.create({
    modalView: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: Color.NAMED_Colors.whiteAlpha0
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft:28,
        // paddingRight:28,
        // paddingTop:10,
        // paddingBottom:10,
        width: 60,      //TODO
        height: 40,     //TODO
        backgroundColor: '#171717',
        borderRadius: 5,
    },
    windowTop: {

        paddingLeft: 6,
        paddingRight: 6,

    },
    windowRight: {

        paddingTop: 6,
        paddingBottom: 6,

    },
    windowLeft: {

        paddingTop: 6,
        paddingBottom: 6,

    },
    windowBottom: {

        paddingLeft: 6,
        paddingRight: 6,

    },
    top: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderTopColor: 'rgba(255,255,255, 0)',//下箭头颜色
        borderLeftColor: 'rgba(255,255,255, 0)',//右箭头颜色
        borderBottomColor: '#171717',//上箭头颜色
        borderRightColor: 'rgba(255,255,255, 0)'//左箭头颜色
    },
    bottom: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderTopColor: '#171717',//下箭头颜色
        borderLeftColor: 'rgba(255,255,255, 0)',//右箭头颜色
        borderBottomColor: 'rgba(255,255,255, 0)',//上箭头颜色
        borderRightColor: 'rgba(255,255,255, 0)'//左箭头颜色
    },
    left: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderTopColor: 'rgba(255,255,255, 0)',//下箭头颜色
        borderLeftColor: 'rgba(255,255,255, 0)',//右箭头颜色
        borderBottomColor: 'rgba(255,255,255, 0)',//上箭头颜色
        borderRightColor: '#171717'//左箭头颜色
    },
    right: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderTopColor: 'rgba(255,255,255, 0)',//下箭头颜色
        borderLeftColor: '#171717',//右箭头颜色
        borderBottomColor: 'rgba(255,255,255, 0)',//上箭头颜色
        borderRightColor: 'rgba(255,255,255, 0)'//左箭头颜色
    }
});