import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from '../src/components/checkbox'

export default class CheckBoxE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row'}}>
                    <CheckBox label={'男'}/>
                    <CheckBox label={'女'}/>

                </View>

                <View style={styles.up}>
                    <View style={{flexDirection: 'row'}}>
                        <CheckBox border={true}/>
                        <CheckBox checked={true} disabled={true} border={true}/>
                        <CheckBox border={true}/>
                    </View>
                </View>

                    <View style={{flexDirection: 'row',flexWrap:'wrap',
                        alignItems:'center',
                        justifyContent:'center'}}>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                        <CheckBox indeterminate={true}/>
                    </View>

                <View style={styles.up}>
                    <View>
                        <CheckBox/>
                        <CheckBox/>
                        <CheckBox/>
                        <CheckBox/>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    up: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        flexWrap: 'wrap',

    },
    down: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    left: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    },
    right: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    }
});
