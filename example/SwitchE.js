import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  findNodeHandle,
  UIManager
} from 'react-native';
import Switch from '../src/components/switch/Switch';

export default class SwitchE extends Component {

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
          <Text>Switch</Text>
          <View style={styles.group}>
            <Switch uncheckedLabel='左边' checkedLabel='右边' uncheckedValue='张建东' checkedValue='孙洪雨' onChange={(value,checked,event)=>{
              console.log('value:'+value+'  checked:'+checked+'  e:'+event);
            }}/>
            <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
            <Switch uncheckedLabel='左边' checkedLabel='右边' checked/>
          </View>
          <Switch uncheckedLabel='左边' checkedLabel='右边'/>
          <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
          <Switch uncheckedLabel='左边' checkedLabel='右边' checked disabled/>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Text>left</Text>
            <View style={styles.group}>
              <Switch uncheckedLabel='左边' checkedLabel='右边' uncheckedValue='张建东' checkedValue='孙洪雨' onChange={(value,checked,event)=>{
                console.log('value:'+value+'  checked:'+checked+'  e:'+event);
              }}/>
              <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
              <Switch uncheckedLabel='左边' checkedLabel='右边' checked/>
            </View>
            <Switch uncheckedLabel='左边' checkedLabel='右边'/>
            <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
            <Switch uncheckedLabel='左边' checkedLabel='右边' checked disabled/>
          </View>
          <View style={styles.right}>
            <Text>right</Text>
            <Text>Switch</Text>
            <View style={styles.group}>
              <Switch uncheckedLabel='左边' checkedLabel='右边' uncheckedValue='张建东' checkedValue='孙洪雨' onChange={(value,checked,event)=>{
                console.log('value:'+value+'  checked:'+checked+'  e:'+event);
              }}/>
              <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
              <Switch uncheckedLabel='左边' checkedLabel='右边' checked/>
            </View>
            <Switch uncheckedLabel='左边' checkedLabel='右边'/>
            <Switch uncheckedLabel='左边' checkedLabel='右边' disabled />
            <Switch uncheckedLabel='左边' checkedLabel='右边' checked disabled/>
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
    flexWrap: 'wrap'
  },
});
