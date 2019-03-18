import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  findNodeHandle,
  UIManager,
  TouchableHighlight
} from 'react-native';
import Button from '../src/components/button/Button';
import Icon from '../src/components/icon/Icon';

export default class ButtonE extends Component{

  onC(e){
    const handle = findNodeHandle(this.refs.iconB)
    UIManager.measure(handle,(x, y, width, height, pageX, pageY)=>{
      console.log('相对父视图位置x:', x);
      console.log('相对父视图位置y:', y);
      console.log('组件宽度width:', width);
      console.log('组件高度height:', height);
      console.log('距离屏幕的绝对位置x:', pageX);
      console.log('距离屏幕的绝对位置y:', pageY);
    })
  }

  constructor(props) {
    super(props);

  }

  render() {

    return (
        // <View style={styles.container}>
        //   <View style = {styles.up}>
        //     <Button type = "default" size = 'large' iconPosition='right'>我是标准按钮</Button>
        //     <Button type = "success" size = 'large' icon='info' iconPosition='right'>ddd</Button>
        //     <Button type = "primary" size = 'small'>我是小按钮</Button>
        //     <Button type = "warning" size = 'default'>中按钮</Button>
        //     <Button type = "danger" size = 'large' icon='info' iconPosition='right'>我是大按钮</Button>
        //   </View>
        //   <View style={styles.down}>
        //     <View style = {styles.left}>
        //       <Button type = "default" size = 'default' >我是标准按钮</Button>
        //       <Button type = "success" size = 'default' >我是按钮</Button>
        //       <Button type = "warning" size = 'default' round>按钮</Button>
        //       <Button type = "danger" size = 'default'  circle>按钮</Button>
        //       <Button type = "primary" size = 'default'>我是按钮</Button>
        //     </View>
        //     <View style = {[styles.right]}>
        //       <Button type = "default" size = 'small' loading >我1</Button>
        //       <Button type = "success" size = 'small' loading></Button>
        //       <Button type = "warning" size = 'small'>我是按3</Button>
        //       <Button type = "danger" size = 'small'>我是按钮4</Button>
        //       <Button type = "primary" size = 'small'>我是按钮的5</Button>
        //     </View>
        //   </View>
        // </View>
        <ScrollView style={{flex: 1}}>
          <Text>大按钮</Text>
          <View style={styles.group}>
            <Button type='default' size='large'>大按钮</Button>
            <Button type='primary' size='large'>大按钮</Button>
            <Button type='success' size='large'>大按钮</Button>
            <Button type='warning' size='large'>大按钮</Button>
            <Button type='danger' size='large'>大按钮</Button>
          </View>
          <Text>中按钮不可点击</Text>
          <View style={styles.group}>
            <Button type='default' size='default' disabled round>大按钮</Button>
            <Button type='primary' size='default' disabled round>大按钮</Button>
            <Button type='success' size='default' disabled round>大按钮</Button>
            <Button type='warning' size='default' disabled round>大按钮</Button>
            <Button type='danger' size='default' disabled round>大按钮</Button>
          </View>
          <Text>小按钮loading</Text>
          <View style={styles.group}>
            <Button type='default' size='default' loading>大按钮</Button>
            <Button type='primary' size='small' loading>大按钮</Button>
            <Button type='success' size='large' loading round>大按钮</Button>
            <Button type='warning' size='small' loading></Button>
            <Button type='danger' size='large' loading circle></Button>
          </View>
          <Text>icon按钮</Text>
          <View style={styles.group}>
            <Button type='default' size='small' icon='info' iconPosition='right'>大按钮</Button>
            <Button type='primary' size='large' icon='info' iconPosition='left'>大按钮</Button>
            <Button type='success' size='default' >ddd</Button>
            <Button type='warning' size='large' icon='info' iconPosition='left'></Button>
            <Button type='danger' size='large'>大按钮</Button>
          </View>
          <Text>圆按钮</Text>
          <View style={styles.group}>
            <Button type='default' size='large' circle>按钮</Button>
            <Button type='primary' size='default' circle>按钮</Button>
            <Button type='danger' size='small' circle>按钮</Button>
            <Button type='success' size='large' circle icon='info' iconPosition='left'></Button>
            <Button type='warning' size='default' circle icon='info' iconPosition='left'></Button>
            <Button type='danger' size='small' circle icon='info' iconPosition='left'></Button>
          </View>
          <Text>大按钮block</Text>
          <View style={styles.group}>
            <Button type='default' size='large' block>大按钮</Button>
            <Button type='primary' size='large' block round>大按钮</Button>
            <Button type='success' size='large' block icon='info' iconPosition='left'></Button>
            <Button type='warning' size='large' block icon='info' iconPosition='left'>大按钮</Button>
            <Button type='danger' size='large' block icon='info' iconPosition='right'>大按钮</Button>
          </View>
        </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  group:{
    justifyContent:'space-around',
    alignItems: 'center',
    paddingBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  up:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
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
  }
});
