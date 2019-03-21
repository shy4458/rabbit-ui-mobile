import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import PropTypes from "prop-types"
import Icon from "../icon/Icon";
import Colors from "../../commons/Colors";

export default class CheckBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            iconName: 'square',
            checked: this.props.checked,
        }
    }

    componentDidMount() {
        this._propsChecked()
    }

    render() {
        let {
            disabled,
            onChange,
            value
        } = this.props;

        const {checkBoxGroup} = this.context;
        if (checkBoxGroup) {
            disabled = disabled || checkBoxGroup.disabled;
        }

        const onChanged = (event) => {
            if (disabled) {
                return
            }
            this.setState({
                checked: !this.state.checked,
                iconName: 'check-square' === this.state.iconName ? 'square' : 'check-square',

            });

            if (!!onChange) {
                onChange(!this.state.checked, event)
            }

            if (this.context.checkBoxGroup && this.context.checkBoxGroup.onChange) {
                this.context.checkBoxGroup.onChange(value, event);
            }
        };

        return (
            <TouchableOpacity disabled={this._propsDisabled()}
                              style={[styles.container, this._propsBorder()]}
                              onPress={onChanged}>
                {this._propsIndeterminate()}
                <Text style={{marginRight: 6}}>{this._propsLabel()}</Text>
            </TouchableOpacity>
        )
    }

    //是否选中
    _propsChecked() {
        let {checked} = this.props;
        checked === true ? this.setState({
            iconName: 'check-square',
            checked: true
        }) : this.setState({
            iconName: 'square',
            checked: false
        })
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
            <View style={styles.bView1}>
                <View style={styles.bView2}/>
            </View>
            :
            <Icon style={{margin: 6}} name={this.state.iconName} size={20} color={Colors.green10}/>
    }

    _propsLabel() {
        let {label} = this.props;
        return label
    }

    _propsBorder() {
        let {border} = this.props;
        return border === true ?
            styles.border : null;
    }
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    //办选view
    bView1: {
        padding: 2,
        height: 17.5,
        width: 17.5,
        borderColor: Colors.green10,
        borderWidth: 1.8,
        borderRadius: 3,
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center',

    },
    bView2: {
        height: 8,
        width: 8,
        backgroundColor: Colors.green10,
    },
    border: {
        borderColor: Colors.defaultColor,
        borderWidth: 1,
        borderRadius: 5
    }

});

CheckBox.defaultProps = {
    disabled: false,
    label: '北控三兴',
    checked: false,
};

CheckBox.propsTypes = {
    checked: PropTypes.bool, //设置是否选中 bool true/false
    disabled: PropTypes.bool, //设置是否禁用bool false true/false
    indeterminate: PropTypes.bool,//设置是否为半选状态 bool true/false
    border: PropTypes.bool, //设置是否显示边框 bool true / false
    label: PropTypes.string, //标签 string
    name: PropTypes.string, //string
    value: PropTypes.string, //string
    onChange: PropTypes.fun, //状态改变的回调函数 func(checked, event)}
};

CheckBox.contextTypes={
    checkBoxGroup:PropTypes.any
}
