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

export default class ProgressE extends Component{
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
          <Text>进度条</Text>
          <View style={styles.group}>
            <Progress progress={this.state.value} textPosition='left' style={{margin: 10}}/>
            <Progress progress={this.state.value} textPosition='right'style={{margin: 10}}/>
            <Progress progress={this.state.value} textPosition='inside' status='success'style={{margin: 10}}/>
            <Progress progress={this.state.value} textPosition='inside-left' status='error'style={{margin: 10}}/>
            <Progress progress={this.state.value} textPosition='inside-right'style={{margin: 10}}/>
            <Progress status='error' progress={this.state.value} showText={false}style={{margin: 10}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button type="success" size='small' onClick={()=>{
              this.setState({
                value:this.state.value+10
              });
            }}>+</Button>
            <Button type="danger" size='small' onClick={()=>{
              this.setState({
                value:this.state.value-10
              });
            }}>-</Button>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.left}>
          <Progress progress={this.state.value} textPosition='left' style={{margin: 10}}/>
          <Progress progress={this.state.value} textPosition='right'style={{margin: 10}}/>
          <Progress progress={this.state.value} textPosition='inside' status='success'style={{margin: 10}}/>
          <Progress progress={this.state.value} textPosition='inside-left' status='error'style={{margin: 10}}/>
          <Progress progress={this.state.value} textPosition='inside-right'style={{margin: 10}}/>
          <Progress status='error' progress={this.state.value} showText={false}style={{margin: 10}}/>
          </View>
          <View style={styles.right}>
                <Progress type='circle' progress={this.state.value}style={{margin: 10}}/>
                <Progress type='circle' progress={this.state.value} width={90} strokeWidth={4} status='error'style={{margin: 10}}/>
                <Progress type='circle' progress={this.state.value} width={50} strokeWidth={2} status='success'style={{margin: 10}}/>
          </View>
        </View>
      </View>
    );
  }
}

// <View style={styles.container}>
//   <View style={styles.up}>
//     <View style={styles.group}>
//       <Progress progress={this.state.value} textPosition='left' style={{margin: 10}}/>
//       <Progress progress={this.state.value} textPosition='right'style={{margin: 10}}/>
//       <Progress progress={this.state.value} textPosition='inside' status='success'style={{margin: 10}}/>
//       <Progress progress={this.state.value} textPosition='inside-left' status='error'style={{margin: 10}}/>
//       <Progress progress={this.state.value} textPosition='inside-right'style={{margin: 10}}/>
//       <Progress status='error' progress={this.state.value} showText={false}style={{margin: 10}}/>
//       <Progress type='circle' progress={this.state.value}style={{margin: 10}}/>
//       <Progress type='circle' progress={this.state.value} width={90} strokeWidth={4} status='error'style={{margin: 10}}/>
//       <Progress type='circle' progress={this.state.value} width={50} strokeWidth={2} status='success'style={{margin: 10}}/>
//       <View style={{flexDirection: 'row'}}>
//         <Button type="success" onClick={()=>{
//           this.setState({
//             value:this.state.value+10
//           });
//         }}>+</Button>
//         <Button type="danger" onClick={()=>{
//           this.setState({
//             value:this.state.value-10
//           });
//         }}>-</Button>
//     </View>
//   </View>
// </View>

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
