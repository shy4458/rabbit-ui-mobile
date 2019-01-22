import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform
} from 'react-native';

export default{

  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height,
  onePixel:1/PixelRatio.get(),
  statysBarHeight:(Platform.OS === 'ios' ? 20 : 0),
};
