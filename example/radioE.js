import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class RadioE extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isSelected:false
    };
  }

  render() {
    return (
      <View>
        <Text>tttttt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
