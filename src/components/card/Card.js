import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Card extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>card</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Card.propTypes = {
  name : PropTypes.string
};

Card.defaultProps = {
  name:  PropTypes.string,
};
