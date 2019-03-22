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
import Badge from '../src/components/badge/Badge';
import Avatar from '../src/components/avatar/Avatar';
import Message from '../src/components/message/Message';

export default class BadgeE extends Component{
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
            <Badge type='default'>
              <Button type='primary'>按钮</Button>
            </Badge>
            <Badge type='primary'>
              <Button type='primary'>按钮</Button>
            </Badge>
            <Badge type='success'>
              <Button type='primary'>按钮</Button>
            </Badge>
            <Badge type='warning'>
              <Button type='primary'>按钮</Button>
            </Badge>
            <Badge type='danger'>
              <Button type='primary'>按钮</Button>
            </Badge>
          </View>
          <View style={[styles.group,{flexDirection: 'row',flexWrap: 'wrap'}]}>
            <Badge type='danger' value='danger'>
              <Button type='success'>按钮</Button>
            </Badge>
            <Badge type='danger' value={45}>
              <Button type='success'>按钮</Button>
            </Badge>
            <Badge type='danger' max={99} value={1000}>
              <Button type='success'>按钮</Button>
            </Badge>
            <Badge type='danger' show={false}>
              <Button type='success'>不显示</Button>
            </Badge>
            <Badge type='danger' showZero={false} value={0}>
              <Button type='success'>value=0</Button>
            </Badge>
          </View>
          <View style={styles.group}>
            <Badge type='danger'>
              <Message type='info' bodyClosable icon={true} title='鲁局尚' description='body关闭'/>
            </Badge>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <View style={styles.group}>
              <Badge type='default'>
                <Avatar size='large' showOneChar={false}>张建东</Avatar>
              </Badge>
              <Badge type='primary'>
                <Avatar size='default' showOneChar={false} shape='shape'>张建东</Avatar>
              </Badge>
              <Badge type='success'>
                <Avatar size='small' showOneChar={false} shape='shape'>张建东</Avatar>
              </Badge>
              <Badge type='warning'>
              <Avatar size='large' showCharIndex={1}>张建东</Avatar>
              </Badge>
              <Badge type='danger'>
                <Avatar size='default' showCharIndex={2}>张建东</Avatar>
              </Badge>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.group}>
              <Badge type='default' dot={true}>
                <Button type='default'>按钮</Button>
              </Badge>
              <Badge type='primary' value='danger' dot={true}>
                <Button type='primary'>按钮</Button>
              </Badge>
              <Badge type='success'>
                <Button type='success'>按钮</Button>
              </Badge>
              <Badge type='warning'>
                <Button type='warning' block icon='info'>按钮</Button>
              </Badge>
              <Badge type='danger'>
                <Button type='danger' block>按钮</Button>
              </Badge>
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
