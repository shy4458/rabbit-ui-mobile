import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../commons/Colors';

export default class Switch extends Component{

  constructor(props) {
    super(props);
    const pad = this.props.checked ? 27 : 1 ;
    this.state = {
      paddLeft : new Animated.Value(pad),
      selected : this.props.checked,
    };
  }

  componentDidMount() {

  }

  _handleOnChange(event){
    let {checkedValue,uncheckedValue, disabled, onChange} = this.props;

    if (disabled) {
      return
    }

    if (this.state.selected) {
      Animated.timing(
        this.state.paddLeft,
        {
          toValue:1,
          duration:200,
        }
      ).start((e)=>{
        if (e.finished) {
          this.setState({
            selected : !this.state.selected
          });
        }
      });
    } else {
      Animated.timing(
        this.state.paddLeft,
        {
          toValue:27,
          duration:200,
        }
      ).start((e)=>{
        if (e.finished) {
          this.setState({
            selected : !this.state.selected
          });
        }
      });
    }

    if (!!onChange) {
      const value = !this.state.selected ? checkedValue : uncheckedValue;
      onChange(value,!this.state.selected,event)
    }
  };

  render() {
    const {
      disabled,
      name,
      checked,
      checkedLabel,
      uncheckedLabel,
      checkedValue,
      uncheckedValue,
      onChange
    } = this.props;

    const backColor = !this.state.selected ? {backgroundColor:(disabled?Colors.defaultColor05:Colors.defaultColor)} : {backgroundColor:(disabled?Colors.primaryColor05:Colors.primaryColor)};
    const lColor = !this.state.selected ? {color:(disabled?Colors.defaultColor05:Colors.defaultColor)} : {color:(disabled?Colors.primaryColor05:Colors.primaryColor)};
    const rColor = this.state.selected ? {color:(disabled?Colors.defaultColor05:Colors.defaultColor)} : {color:(disabled?Colors.primaryColor05:Colors.primaryColor)};

    return (
      <TouchableOpacity style={styles.container} activeOpacity = {0.9} onPress={(event)=>{this._handleOnChange(event)}} disabled = {disabled}>
        {!!uncheckedLabel && <Text style={lColor}>{uncheckedLabel}</Text>}
        <Animated.View style={[styles.back,{paddingLeft: this.state.paddLeft},backColor]}>
          <View style={styles.view}/>
        </Animated.View>
        {!!checkedLabel && <Text style={rColor}>{checkedLabel}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  back:{
    width: 58,
    height: 32,
    backgroundColor: Colors.defaultColor,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 1,
    marginHorizontal: 5,
  },
  view:{
    width: 30,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 15,
  }
});

Switch.propTypes = {
  disabled : PropTypes.bool,
  name : PropTypes.string,
  checked : PropTypes.bool,
  checkedLabel : PropTypes.string,
  uncheckedLabel : PropTypes.string,
  checkedValue : PropTypes.any,
  uncheckedValue : PropTypes.any,
  onChange : PropTypes.func,
};

Switch.defaultProps = {
  disabled : false,
  checked : false
};
