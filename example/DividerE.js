import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ART,
  Animated,
} from 'react-native';
import Progress from '../src/components/pregross/Progress';
import Icon from '../src/components/icon/Icon';
import Iconmap from '../src/components/icon/iconmap';
import Button from '../src/components/button/Button';
import Divider from '../src/components/divider/Divider';

export default class DividerE extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value : 30
    };
}
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.up,,{backgroundColor: 'yellow'}]}>
          <View style={[styles.group]}>
            <Text>上边文字</Text>
            <Divider color='red'></Divider>
            <Text>下边文字</Text>
            <Text>上边文字</Text>
            <Divider color='red' dashed></Divider>
            <Text>下边文字</Text>
          </View>
          <View style={[styles.group]}>
            <Text>上边文字</Text>
            <Divider color='red' titlePosition='left'>Title</Divider>
            <Text>下边文字</Text>
            <Text>上边文字</Text>
            <Divider color='red'>Title</Divider>
            <Text>下边文字</Text>
            <Text>上边文字</Text>
            <Divider color='red' titlePosition='right'>Title</Divider>
            <Text>下边文字</Text>
          </View>
        </View>
        <View style={[styles.down]}>
          <View style={[styles.left,,{backgroundColor: '#b5d9f8'}]}>
            <View style={[styles.group]}>
              <Text>上边文字</Text>
              <Divider color='red' titlePosition='left' dashed>Title</Divider>
              <Text>下边文字</Text>
              <Text>上边文字</Text>
              <Divider color='red' dashed>Title</Divider>
              <Text>下边文字</Text>
              <Text>上边文字</Text>
              <Divider color='red' titlePosition='right' dashed>Title</Divider>
              <Text>下边文字</Text>
            </View>
          </View>
          <View style={[styles.right,{flexDirection: 'row',backgroundColor: '#64D4D2'}]}>
            <View style={styles.group}>
              <Divider type='d' color='red'/>
            </View>
            <Text>ddd</Text>
            <View style={styles.group}>
              <Divider type='d' color='red' dashed/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
    justifyContent:'space-around',
    alignItems: 'center',
    paddingBottom: 30,
  },
});
