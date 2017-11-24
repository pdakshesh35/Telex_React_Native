/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    ScrollView,
    Dimensions,

} from 'react-native';
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';


import {Input, Button} from './src/component';
import * as COLORS from './src/constants/colors';
import LogIn from './src/Views/LogIn';


export default class App extends Component<{}> {

    changeView(){
        this.ref.scrollView.scrollTo(20);
    }

  render() {
      var _scrollView: ScrollView;
      const store = createStore(reducers);
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            horizontal={true}
            pagingEnabled={true}
            automaticallyAdjustContentInsets={false}
            >

         <LogIn  onPress={() => { _scrollView.scrollTo({x: Dimensions.get('window').width}); }}/>


            <View style={styles.container}>
                <Input label="Email" placeholder = "placeholder" />


            </View>



        </ScrollView>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: '#006064',
      width : Dimensions.get('window').width

  },



});
