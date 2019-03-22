import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Slot extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Slot</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Slot.propTypes = {
  name : PropTypes.string
};

Slot.defaultProps = {
  name:  PropTypes.string,
};
