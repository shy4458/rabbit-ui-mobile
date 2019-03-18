import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  findNodeHandle,
  UIManager
} from 'react-native';
import Avatar from '../src/components/avatar/Avatar';

export default class AvatarE extends Component {

  constructor() {
    super();
  }

  _getWH(){
    console.log('fdsfds');
    const handle = findNodeHandle(this.refs.touchs)
    UIManager.measure(handle,(x, y, width, height, pageX, pageY)=>{
      console.log('相对父视图位置x:', x);
      console.log('相对父视图位置y:', y);
      console.log('组件宽度width:', width);
      console.log('组件高度height:', height);
      console.log('距离屏幕的绝对位置x:', pageX);
      console.log('距离屏幕的绝对位置y:', pageY);
    })
  }

  render() {
    const {children} = this.props;
    let pic = 'https://img3.duitang.com/uploads/item/201507/24/20150724125756_eEsuL.thumb.700_0.jpeg';
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Text>方形头像</Text>
          <View style={styles.group}>
            <Avatar src={pic} size='large' shape='shape'></Avatar>
            <Avatar src={pic} size='default' shape='shape'></Avatar>
            <Avatar src={pic} size='small' shape='shape'></Avatar>
          </View>
          <Text>圆形头像</Text>
          <View style={styles.group}>
            <Avatar src={pic} size='large'></Avatar>
            <Avatar src={pic} size='default' ></Avatar>
            <Avatar src={pic} size='small' ></Avatar>
          </View>
          <Text>自定义大小头像</Text>
          <View style={styles.group}>
            <Avatar src={pic} size={70}></Avatar>
            <Avatar src={pic} size={55} ></Avatar>
            <Avatar src={pic} size={30} ></Avatar>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <View style={styles.group}>
              <Avatar size='large' icon='book'  shape='shape'/>
              <Avatar size='default' icon='book' shape='shape'/>
              <Avatar size='small' icon='book' shape='shape'/>
            </View>
            <View style={styles.group}>
              <Avatar size='large' icon='book' />
              <Avatar size='default' icon='book'/>
              <Avatar size='small' icon='book' shape='circle'/>
            </View>
            <View style={styles.group}>
              <Avatar size='large' icon='book' />
              <Avatar size='default' icon='book'/>
              <Avatar size='small' icon='book' shape='circle'/>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.group}>
              <Avatar size='large' showOneChar={false} shape='shape'>张建东</Avatar>
              <Avatar size='default' showOneChar={false} shape='shape'>张建东</Avatar>
              <Avatar size='small' showOneChar={false} shape='shape'>张建东</Avatar>
            </View>
            <View style={styles.group}>
              <Avatar size='large' showCharIndex={1}>张建东</Avatar>
              <Avatar size='default' showCharIndex={2}>张建东</Avatar>
              <Avatar size='small' showCharIndex={0}>张建东</Avatar>
            </View>
            <View style={styles.group}>
              <Avatar size='large' showOneChar={true}>张建东</Avatar>
              <Avatar size='default' showOneChar={true}>张建东</Avatar>
              <Avatar size='small' showOneChar={true}>张建东</Avatar>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  up:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  down:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    flexDirection: 'row'
  },
  left:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  right:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  group:{
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
