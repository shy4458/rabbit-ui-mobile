import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated
} from 'react-native';
import Message from '../src/components/message/Message';

export default class MessageE extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text:''
    };
  }


  render() {

    return (
      <View style={styles.container}>
        <View style={styles.up}>
        <Message title='鲁局尚' closable bodyClosable description='全部可关闭'/>
        <Message type='info' bodyClosable icon={true} title='鲁局尚' description='body关闭'/>
        <Message type='success' closable title='鲁局尚' description='右侧关闭' closeText='关闭'/>
        <Message type='warning' icon={true} title='鲁局尚' description='10秒关闭'closeDelay={10}/>
        <Message type='error' title='鲁局尚' description='5秒关闭'closeDelay={5}/>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Message type='success' light description='我拿了内存条走了'/>
            <Message type='warning' title='鲁局尚'/>
            <Message type='error' light description='我拿了内存条走了'/>
            <Message icon type='error' title='鲁局尚'/>
          </View>
          <View style={styles.right}>
            <Message type='success' light closeText='关闭'/>
            <Message type='warning' />
            <Message type='error' light />
          </View>
        </View>
        <Text>lakjflakjfdsa</Text>
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
