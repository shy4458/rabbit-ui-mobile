import React, {Component} from "react";
import {View, StyleSheet, Switch, CheckBox, TouchableOpacity} from "react-native"
import PropTypes from "prop-types"
import Icon from "../icon/Icon";
import Colors from "../../commons/Colors";

export default class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            valueFlag: false,
            iconName: 'square'
        }
    }

    componentDidMount() {
        this._propsChecked()
    }

    render() {
        return (
            this._propsIndeterminate()
        )
    }

    //是否选中
    _propsChecked() {
        let {checked} = this.props;
        checked === true ? this.setState({iconName: 'check-square'}) : this.setState({iconName: 'square'})
    }

    //是否禁用
    _propsDisabled() {
        let {disabled} = this.props;
        return disabled
    }

    //是否半选
    _propsIndeterminate() {
        let {indeterminate} = this.props;
        return indeterminate === true ?

            <View style={{margin: 6,justifyContent: 'center',alignItems: 'center'}}>
                <View style={styles.bView2}/>
            </View>

            :
            <TouchableOpacity
                disabled={this._propsDisabled()}
                style={styles.container}
                onPress={() => {
                    this.setState({iconName: 'check-square' === this.state.iconName ? 'square' : 'check-square'});
                    console.log(this.state.iconName + "")
                }}>
                <Icon style={{margin: 6}} name={this.state.iconName} size={20} color={'#009688'}/>
            </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

    container: {
        height: 32, width: 32, justifyContent: 'center', alignItems: 'center',
    },
    //办选view
    bView1: {
        height: 32,
        width: 32,
        backgroundColor: Colors.NAMED_Colors.white
    },
    bView2:{
        height:12,
        width:12,
        backgroundColor:'red'
    }

});

Checkbox.defaultProps = {
    disabled: false,
};

Checkbox.propsTypes = {
    checked: PropTypes.bool, //设置是否选中 bool true/false
    disabled: PropTypes.bool, //设置是否禁用bool false true/false
    indeterminate: PropTypes.bool,//设置是否为半选状态 bool true/false
    border: PropTypes.bool, //设置是否显示边框 bool true / false
    label: PropTypes.string, //标签 string
    name: PropTypes.string, //string
    value: PropTypes.string, //string
    onChange: PropTypes.fun, //状态改变的回调函数 func(checked, event)}
};