import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropsTypes from 'prop-types';
import Iconmap from './iconmap';

export default class Icon extends Component{

  render() {
    const {
      name,
      size,
      color,
      style,
    } = this.props;

    return (
      <Text style={[styles.container,{color:color,fontSize: size},style]}>{String.fromCharCode(Iconmap[name])}</Text>
    );
  }
}


Icon.propTypes = {
  name:PropsTypes.string,
  size:PropsTypes.number,
  color:PropsTypes.string,
  style:PropsTypes.any,
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'feather',
    color: '#333333',
    fontSize: 24,
  },
});
