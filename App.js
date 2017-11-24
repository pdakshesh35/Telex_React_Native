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

import {Input, Button} from './src/component';
import * as COLORS from './src/constants/colors';


export default class App extends Component<{}> {

    changeView(){
        this.ref.scrollView.scrollTo(20);
    }

  render() {
      var _scrollView: ScrollView;
    return (
        <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            horizontal={true}
            pagingEnabled={true}
            automaticallyAdjustContentInsets={false}
            >

          <View style={styles.container}>
              <Input label="Email" placeholder = "username@email.com" />
              <Input label="Password" placeholder = "*******" />
              <View style={styles.btnViewContainer}>
                  <Button
                      title="Log In"
                      backgroundColor={COLORS.YELLOW}
                      width={Dimensions.get('window').width - 100}
                  />

                  <Button
                      title="Sign Up"
                      backgroundColor={COLORS.PINK}
                      width={Dimensions.get('window').width/2}
                      onPress={() => { _scrollView.scrollTo({x: Dimensions.get('window').width}); }}/>

              </View>


          </View>
            <View style={styles.container}>
                <Input label="Email" placeholder = "placeholder" />


            </View>



        </ScrollView>
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
   btnViewContainer : {

       width : Dimensions.get('window').width,
       alignItems:'flex-end',


    }


});
