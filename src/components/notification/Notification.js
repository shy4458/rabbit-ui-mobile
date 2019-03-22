import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Notification extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notification</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Notification.propTypes = {
  name : PropTypes.string
};

Notification.defaultProps = {
  name:  PropTypes.string,
};
