import React from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions, Image} from 'react-native';


const Input = ({label, placeholder, onChangeText, secureTextEntry}) => {
    return(
        <View style={styles.inputContainer} >

            <View style={styles.labelContainer}>
                <Text style={styles.labelStyle}>{label}</Text>
            </View>
            <TextInput
                style={styles.inputStyle}
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
                onChangeText = {onChangeText}

            />

        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer : {

        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:1,
        backgroundColor:'#B2EBF2',
    },

    labelContainer : {
        width : 100,
        height : 50,
        justifyContent : 'center',
        backgroundColor : '#00BCD4',


    },
    labelStyle : {

        marginLeft: 10,
        color : 'white',
        fontSize : 15,
        fontWeight:'bold'

    },

    inputStyle : {
        flex : 1,
        height : 50,
        paddingLeft:10,
        backgroundColor:'#B2EBF2',
        fontWeight:'bold',

    },

});
export {Input};