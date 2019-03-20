import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Radio from '../radio/Radio';

export default class RadioGroup extends Component{

  constructor(props) {
    super(props);
    this.state = {
      values: this.props.value,
    };
  }

  getChildContext(){
    return {
        radioGroup: {
          value: this.state.values,
          disabled : this.props.disabled,
          name : this.props.name,
          onChange : this._handleOnChange
        }
    }
  }

  _handleOnChange=(value , e)=>{
    const {onChange} = this.props;
    const oldValue = this.state.values;
    if (value !== oldValue) {
      this.setState({
        values: value
      });
      if (onChange) {
        onChange(value,e);
      }
    }

  }

  _getTitleArray(){
    let {titleArray} = this.props;
    if (!titleArray) {
      return
    }
    var radioArray = [];
    for (var i = 0; i < titleArray.length; i++) {
      radioArray.push(
        <Radio key={i}/>
      )
    }
    return radioArray
  }

  render() {

    const {
      titleArray,
      name,
      disabled,
      value,
      onChange,
      style,
      children
     } = this.props;

    const getArray = this._getTitleArray();

    return (
      <View style={[styles.container,style]}>
        {children}
        {getArray}
      </View>
    );
  }
}

RadioGroup.propTypes = {
  titleArray:PropTypes.array,
  disabled : PropTypes.bool,
  value : PropTypes.string,
  name : PropTypes.string,
};

RadioGroup.defaultProps = {
  disabled : false,
  value : '',
  name : '',
};

RadioGroup.childContextTypes = {
  radioGroup : PropTypes.object,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    padding: 5
  },
});
