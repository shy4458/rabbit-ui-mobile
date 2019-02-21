import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../commons/Colors';
import Fonts from '../../commons/Fonts';


const buttonType = {
  Default : 'default',
  Primary : 'primary',
  Success : 'success',
  Warning : 'warning',
  Danger : 'danger',
};

const buttonSize = {
  Small : 'small',
  Default : 'default',
  Large : 'large'
};

const iconPosition = {
    Left : 'left',
    Right : 'right',
    Up : 'up',
    Down : 'down'
}

const sizeArr = [
  {
    width: 120,
    height: 50,
  }, {
    width: 100,
    height: 40,
  }, {
    width: 80,
    height: 30,
},];

export default class Button extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
  }

  //按钮文字,默认
  getPropsText() {
      let {type, children} = this.props;
      switch (type) {
          case "default":
              return children = children == null ? buttonType.Default : children.toString();
          case "primary":
              return children = children == null ? buttonType.Primary : children.toString();
          case "success":
              return children = children == null ? buttonType.Success : children.toString();
          case "warning":
              return children = children == null ? buttonType.Warning : children.toString();
          case "danger":
              return children = children == null ? buttonType.Danger : children.toString();
          default: {
              return children = children == null ? buttonType.Default : children.toString();
          }
      }
  }

  //按钮背景色
  getPropsColor() {
      let {type} = this.props;
      switch (type) {
          case "default":
              return {backgroundColor:Colors.defaultColor}
          case "primary":
              return {backgroundColor:Colors.primaryColor}
          case "success":
              return {backgroundColor:Colors.successColor}
          case "warning":
              return {backgroundColor:Colors.warningColor}
          case "danger":
              return {backgroundColor:Colors.dangerColor}
          default: {
              return {backgroundColor:Colors.defaultColor}
          }
      }
  }

  //设置自定义圆角
  getPropsRadius() {
      let {radius,circle,round, size} = this.props;
      if ( round ) {
        return {borderRadius:1000}
      } else if( circle ){
          switch (size) {
            case buttonSize.Small:
              return {
                width: 14,
                height:14,
                borderRadius:7
              }
            case buttonSize.Default:
              return {
                width: 16,
                height:16,
                borderRadius:8
              }
            case buttonSize.Large:
              return {
                width: 20,
                height:20,
                borderRadius:10
              }
          }
      }else {
        return {borderRadius: radius = radius == null ? 5 : radius}
      }

  }

  //按钮大小
  getPropsSize() {
      let {size} = this.props;
      return size = size === buttonSize.Large ? sizeArr[0] : (size === buttonSize.Default ? sizeArr[1] : sizeArr[2])
  }

  render() {
    const {
      type,
      radius,
      textColor,
      textSize,
      backgroundColor,
      size,
      disabled,
      block,
      loading,
      icon,
      iconPosition,
      circle,
      round,
      onClick,
      onLongClick,
      onDoubleClick,
      Component,
      children
    } = this.props;

    const getColors = this.getPropsColor();
    const getText = this.getPropsColor();
    const getSize = this.getPropsSize();

    return (
      <TouchableOpacity style = {[styles.default,getColors,getSize]} onPress={onClick} onLongPress={onLongClick}>
        <Text>safladjfasd</Text>
      </TouchableOpacity>
    );
  }
};

Button.propTypes = {
  type:PropTypes.string,
  radius:PropTypes.number,
  textColor:PropTypes.object,
  textSize:PropTypes.number,
  backgroundColor:PropTypes.object,
  size:PropTypes.string,
  disabled:PropTypes.bool,
  block:PropTypes.bool,//设置按钮适应父布局
  loading:PropTypes.bool,
  icon:PropTypes.string,
  iconPosition:PropTypes.string,
  circle:PropTypes.bool,
  round:PropTypes.bool,
  onClick:PropTypes.func,
  onLongClick:PropTypes.func,
  onDoubleClick:PropTypes.func,
  Component:PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    color: Colors.white,
  },
  default:{
    borderWidth: 1,
    borderColor: Colors.black
  },

});
