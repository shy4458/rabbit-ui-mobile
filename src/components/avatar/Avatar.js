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
      imgStyle,
      onError,
      onClick,
      onLongClick,
      children
    } = this.props;

    const getsize = this._getSize();
    const getChildren = this._getChildren();
    const getSrc = this._getSrc();
    return (
      <TouchableOpacity ref='AvatarTouch'
        style={[styles.container,getsize,getSrc,style]}>
        {src ?
          <Image source={{uri:src}}
            style={[{width: 60,height: 60},getsize,imgStyle]}/> :
          <Text numberOfLines={1}
            textTransform='capitalize'
            style={[styles.text]}
            >
              {getChildren}
            </Text>
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
  size:PropTypes.oneOfType([PropTypes.number,[sizeType.Large,sizeType.Default,sizeType.smSmall]]),
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
};
