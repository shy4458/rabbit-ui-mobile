import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../commons/Colors';
import Fonts from '../../commons/Fonts';
import Screen from '../../commons/Screen';

import Icon from '../icon/Icon';
import Iconmap from '../icon/iconmap';

const types ={
  Default:'default',
  Info:'info',
  Success : 'success',
  Warning : 'warning',
  Error : 'error',
}

export default class Message extends Component{

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
      heightV: new Animated.Value(0),
      widthV: new Animated.Value(0),
      hidden: false,
      closeDelay:0
    }
  }

  componentDidMount() {
    Animated.timing(                  // 随时间变化而执行动画
      this.state.fadeAnim,            // 动画中的变量值
      {
        toValue: 1,                   // 透明度最终变为1，即完全不透明
        duration: 1000,              // 让动画持续一段时间
      }
    ).start();

    let {closeDelay} = this.props;
    console.log(closeDelay);
    if (closeDelay>0) {
      this.timer = setTimeout(
        () => {
          this.setState({
            hidden:true
          });
         },
        closeDelay*1000
      );
    }
  }

  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }

  _getClosedStr(){
    let {closeText} = this.props;
    if (closeText) {
      return closeText
    }else{
      return 'x'
    }
  }

  _getTitleStr(){
    let {title} = this.props;
    if (title) {
      return title
    }else{
      return ''
    }
  }

  _getSubTitleStr(){
    let {description} = this.props;
    if (description) {
      return description
    }else{
      return ''
    }
  }

  _getIconName(){
    let {icon,type} = this.props;
    if (!icon) {
      return
    }
    if (typeof(icon) === 'string') {
      return icon
    }else{
      switch (type) {
        case types.Default:
          return 'alert-circle'
        case types.Info:
          return 'info'
        case types.Success:
          return 'alert-circle'
        case types.Warning:
          return 'alert-circle'
        case types.Error:
          return 'x-circle'
        }
    }

  }

  _getTitleColor(){
    let {type,light} = this.props;
    if (light) {
      switch (type) {
        case types.Default:
          return {}
        case types.Info:
          return {color:Colors.primaryColor}
        case types.Success:
          return {color:Colors.successColor}
        case types.Warning:
          return {color:Colors.warningColor}
        case types.Error:
          return {color:Colors.dangerColor}
        }
    } else {
      return type == 'default' ? {} : {color:Colors.white}
    }

  }

  _getTypeStyle(){
    let {type,light} = this.props;
    if (light) {
      switch (type) {
        case types.Default:
          return {backgroundColor: Colors.defaultColor09}
        case types.Info:
          return {backgroundColor: Colors.primaryColor09,borderColor:Colors.primaryColor}
        case types.Success:
          return {backgroundColor: Colors.successColor09,borderColor:Colors.successColor}
        case types.Warning:
          return {backgroundColor: Colors.warningColor09,borderColor:Colors.warningColor}
        case types.Error:
          return {backgroundColor: Colors.dangerColor09,borderColor:Colors.dangerColor}
      }
    } else {
      switch (type) {
        case types.Default:
          return {backgroundColor: Colors.white}
        case types.Info:
          return {backgroundColor: Colors.primaryColor,borderColor:Colors.primaryColor}
        case types.Success:
          return {backgroundColor: Colors.successColor,borderColor:Colors.successColor}
        case types.Warning:
          return {backgroundColor: Colors.warningColor,borderColor:Colors.warningColor}
        case types.Error:
          return {backgroundColor: Colors.dangerColor,borderColor:Colors.dangerColor}
      }
    }

  }

  render() {
    const {
      type,
      title,
      description,
      closable,
      bodyClosable,
      closeText,
      closeDelay,
      icon,
      light,
      onClose,
      children,
     } = this.props;
     let { fadeAnim,heightV } = this.state;

    const onPressBody = (e) =>{
      if (!bodyClosable) {
        return
      }
      if (onClose) {
        onClose(e);
      }
      Animated.timing(                  // 随时间变化而执行动画
        this.state.fadeAnim,            // 动画中的变量值
        {
          easing:Easing.linear,
          toValue: 0,                   // 透明度最终变为1，即完全不透明
          duration: 1000,              // 让动画持续一段时间
        }
      ).start((e)=>{
        if (e.finished) {
          this.setState({
            hidden:true
          });
        }
      });

    }

    const onPressX = (e) =>{
      if (!closable) {
        return
      }
      if (onClose) {
        onClose(e);
      }
      Animated.timing(                  // 随时间变化而执行动画
        this.state.fadeAnim,            // 动画中的变量值
        {
          easing:Easing.linear,
          toValue: 0,                   // 透明度最终变为1，即完全不透明
          duration: 1000,              // 让动画持续一段时间
        }
      ).start((e)=>{
        if (e.finished) {
          this.setState({
            hidden:true
          });
        }
      });
    }

    const onLayout=(event)=>{
      this.setState({
        heightV:event.nativeEvent.layout.height,
        widthV:event.nativeEvent.layout.width
      });
    }

    const getTitleColor = this._getTitleColor();
    const getTypeStyle = this._getTypeStyle();

    const getIcon = this._getIconName();
    const getTitleStr = this._getTitleStr();
    const getSubTitleStr = this._getSubTitleStr();
    const getClosedStr = this._getClosedStr();

    const bottomM = !description ? {marginBottom:10} : {}
    const topM = !title ? {marginTop:10}:{}

    return (
      this.state.hidden ? null :
        <Animated.View style = {[styles.container,{opacity: fadeAnim},getTypeStyle]} onLayout={onLayout}>
          <Icon name={getIcon} size={Fonts.xLARGE} color={Colors.defaultColor} style={[{marginTop: 13,marginLeft: 10,marginRight: -5},getTitleColor]}/>
          <TouchableOpacity style={[styles.left]} activeOpacity={1} onPress={onPressBody}>
            {!!title &&<Text style={[styles.title,getTitleColor,bottomM]}>{getTitleStr}</Text>}
            {!!description&& <Text style={[styles.subTitle,getTitleColor,topM]}>{getSubTitleStr}</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={styles.right} onPress={onPressX}>
            <Text style={[styles.closeText,getTitleColor]}>{getClosedStr}</Text>
          </TouchableOpacity>
        </Animated.View>

    );
  }
}

Message.propTypes = {
  type : PropTypes.string,
  title : PropTypes.string,
  description : PropTypes.string,
  closable : PropTypes.bool,
  bodyClosable :PropTypes.bool,
  closeText:PropTypes.string,
  closeDelay:PropTypes.number,
  icon:PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  light:PropTypes.bool,
  onClose:PropTypes.func,
};

Message.defaultProps = {
  type : 'default',
  closable : false,
  bodyClosable : false,
  closeDelay:0,
  icon:false,
  light:false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.defaultColor
  },
  left: {
    flex: 1,
    backgroundColor: Colors.NAMED_Colors.whiteAlpha0
  },
  right: {
    alignItems: 'center',
    width: '10%',
    backgroundColor: Colors.NAMED_Colors.whiteAlpha0,
    paddingTop: 5
  },
  title:{
    fontSize: Fonts.BIG,
    color: Colors.titleColor,
    margin: 10,
    marginBottom: 0
  },
  subTitle:{
    fontSize: Fonts.xSMALL,
    color: Colors.subTitleColor,
    margin: 10,
    marginTop: 5
  },
  closeText:{
    color: Colors.defaultColor,
    fontSize: Fonts.SMALL,
  }
});
