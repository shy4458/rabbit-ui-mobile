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
import Tooltip from '../src/components/tooltip/Tooltip';

export default class ToolTipE extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value : 30
    };
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Text>提示</Text>
          <View style={[styles.group,{flexDirection: 'row',flexWrap: 'wrap'}]}>
            <Tooltip text='default'>
              <Button type='primary'>按钮</Button>
            </Tooltip>
            {/* <Tooltip text='primary'>
              <Button type='primary'>按钮</Button>
            </Tooltip>
            <Tooltip text='success'>
              <Button type='primary'>按钮</Button>
            </Tooltip>
            <Tooltip text='warning'>
              <Button type='primary'>按钮</Button>
            </Tooltip>
            <Tooltip text='danger'>
              <Button type='primary'>按钮</Button>
            </Tooltip> */}
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Text>lkajklfja</Text>
            <View style={styles.group}>
              <Text>skdfjs</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text>fasdfsadf</Text>
            <View style={styles.group}>
              <Text>skdfjs</Text>
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
