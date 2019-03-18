import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image
} from 'react-native';

export default class textInputE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : '',
      width: 0 ,
      value: 0 ,
    };
  }

  render() {

    const onProgresses=(e)=>{
      console.log('event:-'+e.nativeEvent.loaded);
      console.log('event:-'+e.nativeEvent.total);
    }

    return (
      <View style = {styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551436207242&di=7d76bd7f2cd9d16fad96bbdbed4ab8bf&imgtype=0&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmw690%2F001m1Utdzy6ZLnVyRxQe6%26690'}}
          style = {[{width:375,height:500}]}
          onProgress = {onProgresses}
        />
      </View>
    );
  }




  returnInput(){
    return  <TextInput
              style = {styles.input}
              defaultValue = {this.state.text}
              placeholder='请输入遗书'
              numberOfLines = {1}
              onFocus = {renderonFocus}
              clearButtonMode = 'always'
              clearTextOnFocus = {false}
              contextMenuHidden = {true}
              onBlur={renderonBlur}
              onChange = {renderOnChange}
              onContentSizeChange={renderOnSizeChange}
              onKeyPress={renderOnkeyPress}
              onLayout = {renderOnLayout}
              onEndEditing={renderOnEndEditing}
              returnKeyType='search'
              secureTextEntry={true}
            />
  }

  input(){
    const renderonFocus = (e)=>{
      console.log('获得焦点后调用此函数onFocus'+e.target)
    };

    const renderonBlur = (e)=>{
      console.log('失去焦点后调用此函数onBlur'+e.target)
    };

    const renderOnChange= (event) => {

      console.log('输入框内容'+event.nativeEvent.text);
    }


    const renderOnChangeText=(e)=>{
      this.setState({ text : e });
      console.log('text='+e);
    }

    const renderOnSizeChange = (e)=>{
      console.log(e.nativeEvent.contentSize);
    }

    const renderOnEndEditing = (e)=>{
      console.log('编辑结束');
    }

    const renderOnkeyPress = (e)=>{
      console.log('按键标号'+e.nativeEvent.key);
    }

    const renderOnLayout = (e)=>{
      console.log('onlayout'+e.nativeEvent.layout.width);
      this.setState({
        width:e.nativeEvent.layout.width
      });
      console.log(this.state.width);
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: '100%'
  },
  input:{
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'gray',
    width: '100%',
    height: 60,
  }
});
