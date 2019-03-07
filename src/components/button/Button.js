import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../commons/Colors';
import Fonts from '../../commons/Fonts';
import Styles from './Styles/Styles';
import Icon from '../icon/Icon';
import IconMap from '../icon/iconmap';

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

const positionType = {
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

  _getblock(){
    let {block} = this.props;
    if (block) {
      return {width : '100%'}
    }
  }

  _getIconPosition(){
    let {iconPosition} = this.props;
    if (iconPosition) {
      if (iconPosition == positionType.Left || iconPosition == positionType.Right) {
        return {flexDirection: 'row'}
      }
    }
  }

  _getLoading(){
    let {loading}= this.props;
    if (loading) {
      return <Icon name={IconMap.loading}/>
    }
  }


  _renderNode() {
    let {icon,size} = this.props;
    let fontsize = size === buttonSize.Large ? Fonts.LARGE : (size === buttonSize.Default ? Fonts.BIG:Fonts.SMALL)
    const getTextColor = this._getPropsTextColor()
    if (icon) {
      return <Icon name={icon} size={fontsize} style={getTextColor}/>
    }
  }

  //设置自定义圆角
  _getPropsRadius() {
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
  _getFontSize() {
      let {size} = this.props;
      return size === buttonSize.Large ? {fontSize:Fonts.LARGE}: (size === buttonSize.Default ? {fontSize:Fonts.BIG}: {fontSize:Fonts.SMALL})
  }

  _getTouchSize() {
    let {size,circle} = this.props;
    if (circle) {
      return {}
    } else {
      return size === buttonSize.Large ? Styles.ButtonSizePadding.largeBtnPadding : (size === buttonSize.Default ? Styles.ButtonSizePadding.defaultBtnPadding : Styles.ButtonSizePadding.smallBtnPadding)
    }

  }

  //按钮背景色
  _getPropsColor() {
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
  _getPropsTextColor() {
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

    const onPress = (e) =>{
      if (!!disabled||!!loading) {
        return
      }
      if (onClick) {
        onClick(e)
      }
    }

    const onLongPress = (e) =>{
      if (!!disabled||!!loading) {
        return
      }
      if (onLongClick) {
        onLongClick(e)
      }
    }

    const getColors = this._getPropsColor()
    const getRadius = this._getPropsRadius();
    const getblock = this._getblock();
    const getTouchSize = this._getTouchSize();

    const getTextColor = this._getPropsTextColor();
    const getSize = this._getFontSize();
    const getPosition = this._getIconPosition();
    const getLoading = this._getLoading();
    const renderNode = this._renderNode();

    return (
      <TouchableOpacity style = {[Styles.Default,getPosition,getColors,getblock,getRadius,getTouchSize]}
        onPress={onPress}
        onLongPress={onLongPress}
        onlayout={({event}) => this._onlayout(event)}
        disabled = {disabled}
      >
        {loading && getLoading}
        {!text && !loading && !iconPosition && renderNode}
        {icon ? null : <Text style={[getTextColor,getSize]}>{children}</Text>}
        {!text && !loading && iconPosition == positionType.Right && renderNode}
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
  iconPosition:PropTypes.oneOf([positionType.Top,positionType.Bottom,positionType.Left,positionType.Right]),
  circle:PropTypes.bool,
  round:PropTypes.bool,
  onClick:PropTypes.func,
  onLongClick:PropTypes.func,
  onDoubleClick:PropTypes.func,
  Component:PropTypes.object,
};

Button.defaultProps = {
  type:buttonSize.Default,
  text:false,
  size:buttonSize.Default,
  disabled:false,
  block:false,
  loading:false,
  icon:null,
  iconPosition:null,
  circle:false,
  round:false
}
