import React from 'react';
import {View,TouchableOpacity, StyleSheet,Text} from 'react-native';

const Button = ({title, onPress, backgroundColor, width}) => {
    return(

        <TouchableOpacity

            onPress = {onPress}

        >
        <View style = {
            {
                height : 50,
                width : width,
                backgroundColor:backgroundColor,
                alignContent : 'center',
                justifyContent:'center',


            }}>


            <Text style={
                {

                    fontSize : 15,
                    paddingLeft : 10,
                    fontWeight: 'bold',
                    color : 'white'

                }
            }>{title}</Text>

        </View>
        </TouchableOpacity>


    );
};

export {Button};