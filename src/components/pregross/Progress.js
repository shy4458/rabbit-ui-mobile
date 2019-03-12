import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  ART
} from 'react-native';
import PropTypes from 'prop-types';
import Wedge from './Wedge';
import Colors from '../../commons/Colors';
const {
  Surface,          //一个矩形可渲染的区域
  Shape,            //形状定义 可以填充的
  Group,            //可容纳多个形状，文本 或者其他分组
  Path,             //路径
  LinearGradient,    //渐变色
  RadialGradient,
  Pattern,            //填充图片
  ClippingRectangle,  // 剪辑
  Transmform,
 }=ART;

const types = {
  Line : 'line',
  Circle : 'circle'
};

const positions = {
  Left : 'left',
  Right :'right',
  Inside:'inside',
  InsideLeft:'inside-left',
  InsideRight:'inside-right'
};

const states = {
  Success:'success',
  Normal:'normal',
  Errors:'error'
}

export default class Progress extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  componentDidMount() {
    {this._getTextFormater()}
  }

  _getTextFormater(){
    let {textFormater,progress}=this.props;
    if (textFormater) {
      textFormater(progress)
    }
  }

  _getProgressStyle(){
    let {progress,type} = this.props;
    if (progress<0) {
      return
    }else{
      return progress>=100 ? {width:'100%'} :{width:(String(progress)+'%')}
    }
  }

  _getStatus(){
    let {status} = this.props;
    if (status==='normal') {
      return {backgroundColor:Colors.primaryColor}
    } else {
      return status == 'success' ? {backgroundColor:Colors.successColor} : {backgroundColor:Colors.dangerColor}
    }
  }

  _getPositionInside(){
    let {textPosition} = this.props;
    switch (textPosition) {
      case positions.Inside:
      return {alignItems: 'center'}
      case positions.InsideLeft:
      return {alignItems: 'flex-start'}
      case positions.InsideRight:
      return {alignItems: 'flex-end'}
    }
  }

  _textHidden(){
    let {textPosition} = this.props;
    if (textPosition==='left'||textPosition==='right') {
      return false
    }else{
      return true
    }
  }

  _isShowTextHeight(){
    let {showText} = this.props;
    return showText ? {} : {height:10}
  }

  _getPosition(){
    let {textPosition} = this.props;
    switch (textPosition) {
      case positions.Left:
      return {alignItems: 'flex-end'}
      case positions.Right:
      return {alignItems: 'flex-start'}
    }
  }


  render() {
    const {
      type,
      progress,
      width,
      strokeWidth,
      showText,
      textPosition,
      textFormater,
      status,
      style,
      ...children
    } = this.props;

    const path = new Path()
    .moveTo(width/2.0,strokeWidth/2.0)
    .arc(0,width-strokeWidth,(width-strokeWidth)/2.0)
    .arc(0,-(width-strokeWidth),(width-strokeWidth)/2.0)
    .close();

    const getProgressStyle = this._getProgressStyle();
    const progressValue = progress>=100 ? '100%' : (progress<=0 ? '0%' :String(progress)+'%')
    const getStatus = this._getStatus();
    const getCircleStatus = status==='success' ? Colors.successColor : (status==='normal' ? Colors.primaryColor : Colors.dangerColor)
    const getPosition = this._getPosition();
    const getPositionInside = this._getPositionInside();
    const textHidden = this._textHidden();
    const showTextH = this._isShowTextHeight();

    return (
      type==='line' ?
        <View style={[styles.back,style]}>
          {showText&&textPosition==='left'&&<Text >{progressValue}</Text>}
          <View style={[styles.backView,showTextH]}>
            <Animated.View style={[styles.animatedView,getProgressStyle,getStatus,getPositionInside,showTextH]}>
              {textHidden && <Text style={[styles.title]} numberOfLines={1}>{progressValue}</Text>}
            </Animated.View>
          </View>
          {showText&&textPosition==='right'&&<Text>{progressValue}</Text>}
        </View> :
        <Animated.View className="View" style={{backgroundColor: 'white',alignItems: 'center'}}>
          {showText&&<Text style={{position: 'relative',top: width/2.0+strokeWidth*2}}>{progressValue}</Text>}
          <Surface width={width} height={width} style={[styles.sur]}>
            <Shape d={path} stroke={Colors.backgroundColor} strokeWidth ={strokeWidth} fill={Colors.NAMED_Colors.whiteAlpha0}/>
            <Wedge
              outerRadius={width/2.0}
              innerRadius={width/2.0-strokeWidth}
              startAngle={0}
              endAngle={progress>=100 ? 359.99 : (progress<=0 ? 0 :(progress/100)*360)}
              originX={width/2.0}
              originY={0}
              fill={getCircleStatus} />
          </Surface>
        </Animated.View>
    );
  }
}

Progress.propTypes = {
  type : PropTypes.oneOf(['line','circle']),
  progress: PropTypes.number,
  width:PropTypes.number,
  strokeWidth:PropTypes.number,
  showText:PropTypes.bool,
  textPosition:PropTypes.oneOf(['left','right','inside','inside-left','inside-right']),
  textFormater:PropTypes.func,
  status:PropTypes.oneOf(['success','normal','error']),
};

Progress.defaultProps = {
  type : 'line',
  progress : 0,
  width:126,
  strokeWidth:6,
  showText:true,
  textPosition:'right',
  status:'normal'
};

const styles = StyleSheet.create({
  back:{
    flexDirection: 'row',
    width: '100%',
  },
  backView:{
    backgroundColor: Colors.backgroundColor,
    borderRadius: 1000,
    flex:1,
    flexDirection: 'row',
  },
  animatedView:{
    backgroundColor: Colors.primaryColor,
    borderRadius: 1000,
    width: '0%',
  },
  title:{
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  sur:{
    backgroundColor: Colors.NAMED_Colors.whiteAlpha0,
  },
});
