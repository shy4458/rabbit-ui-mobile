import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated
} from 'react-native';
import Radio from '../src/components/radio/Radio';

export default class RadioE extends Component{

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
          <Text>up</Text>
          <View style={[styles.group,{flexDirection: 'row'}]}>
            <Radio/>
            <Radio/>
            <Radio/>
            <Radio/>
            <Radio/>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Text>left</Text>
            <View style={[styles.group,{flexDirection: 'row',flexWrap: 'wrap'}]}>
              <Radio onChange={(checked,event)=>{
                console.log('checked:'+ checked+'--'+'event:'+event);
              }}/>
              <Radio/>
              <Radio/>
              <Radio/>
              <Radio/>
            </View>
          </View>
          <View style={styles.right}>
            <Text>right</Text>
            <View style={[styles.group]}>
              <Radio/>
              <Radio/>
              <Radio/>
              <Radio/>
              <Radio/>
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
