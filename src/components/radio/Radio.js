import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

export default class Radio extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selected:false
    };
  }

  render() {
    return (
      <View>
        <Text>ddddd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
