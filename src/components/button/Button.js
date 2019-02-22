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
import Styles from './Styles/Styles';


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
    Top : 'top',
    Bottom : 'bottom'
}

export default class Button extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      text:''
    }
  }

  getblock(){
    let {block} = this.props;
    if (block) {
      return {width : '100%'}
    }
  }

  getIconPosition(){
    let {icon,iconPosition} = this.props;

    if (!icon && !iconPosition) {

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
              return Styles.RadiusStyle.buttonSizeSmall
            case buttonSize.Default:
              return Styles.RadiusStyle.buttonSizeDefault
            case buttonSize.Large:
              return Styles.RadiusStyle.buttonSizeLagre
          }
      }else {
        return {borderRadius: radius = radius == null ? 5 : radius}
      }

  }

  //按钮大小
  getPropsSize() {
      let {size} = this.props;
      return size === buttonSize.Large ? Styles.ButtonSizePadding.largeBtnPadding : (size === buttonSize.Default ? Styles.ButtonSizePadding.defaultBtnPadding : Styles.ButtonSizePadding.smallBtnPadding)
  }

  //按钮背景色
  getPropsColor() {
      let {type , text ,disabled} = this.props;
      if (text) {
        return {backgroundColor:Colors.NAMED_Colors.whiteAlpha0,borderColor:Colors.NAMED_Colors.whiteAlpha0}
      } else {
        switch (type) {
            case "default":
                return disabled ? Styles.DisabledStyles.tureStyles.default:Styles.DisabledStyles.falseStyles.default
            case "primary":
                return disabled ? Styles.DisabledStyles.tureStyles.primary:Styles.DisabledStyles.falseStyles.primary
            case "success":
                return disabled ? Styles.DisabledStyles.tureStyles.success:Styles.DisabledStyles.falseStyles.success
            case "warning":
                return disabled ? Styles.DisabledStyles.tureStyles.warning:Styles.DisabledStyles.falseStyles.warning
            case "danger":
                return disabled ? Styles.DisabledStyles.tureStyles.danger:Styles.DisabledStyles.falseStyles.danger
            default: {
                return  disabled ? Styles.DisabledStyles.tureStyles.default:Styles.DisabledStyles.falseStyles.default
            }
          }
      }
  }

  //按钮文字,默认
  getPropsTextColor() {
      let {type, text ,disabled} = this.props;
      switch (type) {
          case "default":
            return disabled ? {color:Colors.defaultColor05} : {color:Colors.titleColor}
          case "primary":
            return text ? {color:Colors.primary} : {color:Colors.white}
          case "success":
            return text ? {color:Colors.successColor} : {color:Colors.white}
          case "warning":
            return text ? {color:Colors.warningColor} : {color:Colors.white}
          case "danger":
            return text ? {color:Colors.dangerColor} : {color:Colors.white}
          default : {
            return {color:Colors.titleColor}
          }
      }
  }

  render() {
    const {
      type,
      radius,
      text,
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

    const getColors = this.getPropsColor()
    const getRadius = this.getPropsRadius();
    const getblock = this.getblock();

    const getTextColor = this.getPropsTextColor();
    const getSize = this.getPropsSize();
    return (
      <TouchableOpacity style = {[Styles.Default,getColors,getblock,getRadius]}
        onPress={onClick}
        onLongPress={onLongClick}
        onlayout={({event}) => this._onlayout(event)}
        disabled = {disabled}
        >
        <Text style={[getTextColor,getSize]}>{children}</Text>
      </TouchableOpacity>
    );
  }
};

Button.propTypes = {
  type:PropTypes.oneOf([ buttonType.Default, buttonType.Primary, buttonType.Success, buttonType.Warning, buttonType.Danger]),
  radius:PropTypes.number,
  text:PropTypes.bool,
  size:PropTypes.oneOf([buttonSize.Large,buttonSize.Default,buttonSize.Small]),
  disabled:PropTypes.bool,
  block:PropTypes.bool,//设置按钮适应父布局
  loading:PropTypes.bool,
  icon:PropTypes.string,
  iconPosition:PropTypes.oneOf([iconPosition.Top,iconPosition.Bottom,iconPosition.Left,iconPosition.Right]),
  circle:PropTypes.bool,
  round:PropTypes.bool,
  onClick:PropTypes.func,
  onLongClick:PropTypes.func,
  onDoubleClick:PropTypes.func,
  Component:PropTypes.object,
};
