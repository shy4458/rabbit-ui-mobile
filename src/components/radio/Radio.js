import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../commons/Colors';

export default class Radio extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selected:this.props.checked
    };
  }

  render() {
    let {
      label,
      checked,
      value,
      disabled,
      name,
      onChange,
      style,
      labelStyle,
      radius,
      children
    } = this.props;
    checked = this.state.selected;

    const {radioGroup} = this.context;
    if(radioGroup) {
      name = radioGroup.name
      checked = radioGroup.value === value;
      disabled = disabled || radioGroup.disabled;
    }

    const onChanged = (event)=>{
      if (disabled) {
        return
      }
      this.setState((prevState) => {
        if(!prevState.selected) {
          return {
            selected: true
          }
        }
        return {}
      });
      if (!!onChange) {
        onChange(this.state.selected,event);
      }
      if (this.context.radioGroup && this.context.radioGroup.onChange) {
        this.context.radioGroup.onChange(value , event);
      }
    };

    const borderColorOut = checked ? {borderColor:Colors.primaryColor} : {borderColor:Colors.defaultColor};
    const backColorIn = checked ? {backgroundColor:Colors.primaryColor} : {backgroundColor:Colors.defaultColor};
    const radiusOut = radius*2;
    const labelText = !!label ? label : '选项'
    return (
      <TouchableOpacity style={[styles.container,style]} activeOpacity={0.9} onPress={onChanged} disabled={disabled}>
        <View style={[styles.out,borderColorOut,{width: radiusOut,height: radiusOut,borderRadius: radius}]}>
          <View style={[styles.in,backColorIn,{width: radius,height: radius,borderRadius: radius/2.0}]}/>
        </View>
        <Text style={[styles.label,labelStyle]}>
          {labelText}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },
  out:{
    borderWidth: 1,
    borderColor: Colors.defaultColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  in:{
    backgroundColor: Colors.defaultColor,
  },
  label:{
    padding: 5,
    color:Colors.titleColor
  }
});

Radio.propTypes = {
  label : PropTypes.string,
  checked : PropTypes.bool,
  value : PropTypes.any,
  disabled : PropTypes.bool,
  name : PropTypes.string,
  radius : PropTypes.number,
  onChange : PropTypes.func,
};

Radio.defaultProps = {
  label:'选项',
  checked : false,
  disabled : false,
  radius : 10,
};

Radio.contextTypes = {
  radioGroup : PropTypes.object,
};
