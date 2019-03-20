import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../commons/Colors';
import Fonts from '../../commons/Fonts';

import Icon from '../icon/Icon';

const shapeType = {
  Circle : 'circle',
  Square : 'square'
};

const sizeType = {
  Large : 'large',
  Default : 'default',
  Small : 'small'
};

export default class Avatar extends Component{

  _getSize(){
    let {size,shape} = this.props;
    if (size) {
      return typeof(size)==='number' ? {
        width: size,
        height : size,
        borderRadius: shape==shapeType.Circle ? size/2 : 5
      } : {
        width:(size == sizeType.Large ? 60 : size==sizeType.Small ? 40 : 50),
        height:(size == sizeType.Large ? 60 : size==sizeType.Small ? 40 : 50),
        borderRadius: shape==shapeType.Circle ? (size == sizeType.Large? 30 : (size==sizeType.Default ? 25 : 20)) : 5
      }
    }
  }


  _getSrc(){
    let {src} = this.props;
    if (src) {
      return {backgruoudColor:Colors.white,borderWidth: 1,borderColor: Colors.defaultColor}
    } else {
      return {backgroundColor:Colors.defaultColor,borderColor:Colors.defaultColor,borderWidth:1}
    }
  }

  _getChildren(){
    let {showCharIndex,showOneChar,children} = this.props;
    if (children) {
      return showOneChar ? children.substr(showCharIndex,1) : children
    }
  }

  _textSize(){
    let{size,icon}=this.props;
    switch (size) {
      case 'large':
      return !!icon ? {fontSize:26} : {fontSize:18}
      case 'default':
      return !!icon ? {fontSize:22} :{fontSize:15}
      case 'small':
      return !!icon ? {fontSize:18} :{fontSize:10}
    }
  }

  _getIcon(){
    let {icon,textStyle} = this.props;
    const getsize = this._textSize()
    if (!!icon) {
      return <Icon name={icon} style={[getsize,textStyle]}/>
    } else {
      const getChildren = this._getChildren();
      return  <Text numberOfLines={1} textTransform='capitalize' style={[styles.text,getsize,textStyle]}>{getChildren}</Text>
    }
  }

  render() {
    const
    {
      size,
      shape,
      icon,
      src,
      showOneChar,
      showCharIndex,
      style,
      textStyle,
      imgStyle,
      onError,
      onClick,
      onLongClick,
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

    const getsize = this._getSize();
    const getSrc = this._getSrc();
    const getIcon = this._getIcon();
    return (
      <TouchableOpacity ref='AvatarTouch'
        style={[styles.container,getsize,getSrc,style]}
          onPress={onPress} onLongPress={onLongPress}>
        {src ?
          <Image source={{uri:src}}
            style={[{width: 60,height: 60},getsize,imgStyle]}/> : getIcon
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color:'white',
    textAlign: 'center',
    fontSize: 15,
  }
});

Avatar.propTypes = {
  size:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  shape:PropTypes.oneOf([shapeType.Circle,shapeType.Square]),
  icon:PropTypes.string,
  src:PropTypes.string,
  showOneChar:PropTypes.bool,
  showCharIndex:PropTypes.number,
  style:PropTypes.object,
  imgStyle:PropTypes.object,
  onError:PropTypes.func,
  onClick:PropTypes.func,
  onLongClick:PropTypes.func,
};

Avatar.defaultProps = {
  showOneChar:true,
  showCharIndex:0,
  size:'default',
  shape:'circle',
};
