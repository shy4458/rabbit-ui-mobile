import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated
} from 'react-native';
import RadioGroup from '../src/components/radioGroup/RadioGroup';
import Radio from '../src/components/radio/Radio';
export default class RadioGroupE extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text:''
    };
  }



  render() {

    const handleOnChange=(value,e)=>{
      console.log(value);
      console.log('点击了方法传递成功');
    }

    return (
      <View style={styles.container}>
        <View style={styles.up}>
          <Text>up</Text>
          <View style={[styles.group,{flexDirection: 'row'}]}>
            <RadioGroup style={{flexDirection: 'row'}} onChange={handleOnChange} checked={false} disabled={false}>
              <Radio name='wangzi' value='chifan' />
              <Radio label='男' name='xingbie' value='nan'/>
              <Radio label='女' name='xingbie' value='nv'/>
            </RadioGroup>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
            <Text>left</Text>
            <View style={[styles.group,{flexDirection: 'row',flexWrap: 'wrap'}]}>
              <Radio onChange={(checked,event)=>{
                console.log('checked:'+ checked+'--'+'event:'+event);
                console.log(event.nativeEvent);
              }}/>
            </View>
          </View>
          <View style={styles.right}>
            <Text>right</Text>
            <View style={[styles.group]}>
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
