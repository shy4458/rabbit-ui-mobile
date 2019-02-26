import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropsTypes from 'prop-types';

export default class Icon extends Component{

  render() {
    const {
      name,
      size,
      color,
      style,
    } = this.props;

    return (
      <Text style={[styles.container,{color:color,fontSize: size},style]}>{String.fromCharCode(name)}</Text>
    );
  }
}


Icon.propTypes = {
  name:PropsTypes.string,
  size:PropsTypes.number,
  color:PropsTypes.string,
  style:PropsTypes.object,
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'feather',
    color: '#333333',
    fontSize: 24,
  },
});
