import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform
} from 'react-native';

export default {
  isIos: Platform.OS === 'ios',
}
