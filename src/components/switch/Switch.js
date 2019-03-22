import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Switch extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Switch</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Slider.propTypes = {
  name : PropTypes.string
};

Slider.defaultProps = {
  name:  PropTypes.string,
};
