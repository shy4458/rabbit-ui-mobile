import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const NAMED_Colors = {

  white:'rgba(255,255,255, 1)',
  yellow: "rgba(246, 253, 55, 1)",
  green: "rgba(106, 246, 162, 1)",
  purple: "rgba(144, 63, 199, 1)",
  pink: "rgba(245, 64, 199, 1)",
  darkPink: "rgba(200, 40, 159, 1)",
  orange: "rgba(247, 144, 77, 1)",
};

const THEME_Color = {
  NAMED_Colors,
  Theme:NAMED_Colors.white,

}

export default{
  THEME_Color,
  primary: '#06C1AE',
  border: '#e0e0e0',
  paper: '#f3f3f3',
  gray: '#979797',

  colorWithAlpha(name: string = 'Theme',opacity:number = 1){
    if(!THEME_Color[name]){
      name = 'Theme';
    }
    return THEME_Color[name].split(", 1)").join(`, ${opacity})`);
  }
}
