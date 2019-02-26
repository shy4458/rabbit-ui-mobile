import React, {Component} from 'react';
import {Alert, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

type Props = {
    onPress: function,  //返回点击的b索引
    style: any,       //大小
    theRelation: String, //横向的还是竖向
    itemTheRelation: String, //item中的字体和图标是横向或者是竖向
    textArr: Array,     //每个按钮的文本
    backgroundColor: String, //背景颜色
    radius: number,      //圆角
    itemStyle: String,   //item的样式
    textStyle: String,   //字体样式
    borderWidth: number, //边框宽
    borderColor: String, //边框颜色

}

export default class ButtonGroup extends Component {

    render() {
        let {style, theRelation, itemTheRelation, textArr, radius, itemStyle, textStyle, borderWidth, borderColor,} = this.props;
        theRelation = theRelation == null ? 'row' : theRelation;
        style = style == null ? (theRelation === 'row' ? {width: 400, height: 30} : {width: 60, height: 200}) : style;

        itemTheRelation = itemTheRelation == null ? 'row' : itemTheRelation;
        textArr = textArr == null ? ['语文', '数学', '英语', '体育',] : textArr;
        style.backgroundColor = style.backgroundColor ==null? '#FFFFFF' : style.backgroundColor;
        radius = radius == null ? 5 : radius;
        itemStyle = itemStyle == null ? {
            width: style.width / textArr.length,
            height: style.height,
        } : itemStyle;
        textStyle = textStyle == null ? {color:'#000000'} : textStyle;
        borderWidth = borderWidth == null ? 1 : borderWidth;
        borderColor = borderColor == null ? '#000000' : borderColor;
        let itemWidth;
        //横竖向时，宽的计算
        itemWidth = theRelation === 'row' ? style.width / textArr.length - (textArr.length - 1 * borderWidth) :
            // style.height / textArr.length - (textArr.length - 1 * borderWidth);
            style.width;




        let ButtonGroupArr = [];
        for (let i = 0; i < textArr.length; i++) {
            ButtonGroupArr.push(
                <TouchableOpacity key={i} onPress={() => this.props.onPress(i)}>
                    <View style={[styles.itemView,
                        theRelation === 'row' ?
                            {width: style.width / textArr.length, height: style.height,}:
                            {width : style.width,height:style.height / textArr.length}
                    ]}>
                        <Text style={[textStyle,{width: itemWidth, textAlign: 'center'}]}>{textArr[i]}</Text>
                        <View style={{width: borderWidth}}/>
                    </View>

                </TouchableOpacity>
            );
            if (i !== textArr.length - 1) {
                if (theRelation === 'row') {
                    ButtonGroupArr.push(
                        <View key={i} style={{width: borderWidth, height: style.height, backgroundColor: borderColor}}/>
                    )
                } else {
                    ButtonGroupArr.push(
                        <View key={i} style={{height: borderWidth, width: style.width, backgroundColor: borderColor}}/>
                    )
                }
            }
        }
        return (
            <View style={[styles.view, {
                width: style.width,
                borderWidth: borderWidth,
                borderColor: borderColor,
                flexDirection: theRelation,
                backgroundColor:style.backgroundColor,
                borderRadius: radius,
            }]}>{ButtonGroupArr}</View>
        );
    }
}

const styles = StyleSheet.create({

    view: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-around'
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

})
