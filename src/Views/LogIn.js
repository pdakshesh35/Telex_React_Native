import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {emailChanged, passChanged} from "../actions/index";
import {View, StyleSheet, Dimensions} from 'react-native';
import {Input, Button} from "../component"
import {YELLOW, PINK} from "../constants/colors"

class LogIn extends Component{

    onEmailChange(text) {


        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passChanged(text);
    }

    pressed() {
        const {email, pass} = this.props;
        console.log({email, pass});
    }


    render() {
        return (
            <View style={styles.logInContainer}>
                <Input label="Email" placeholder="username@email.com" onChangeText={this.onEmailChange.bind(this)}  value={this.props.email}/>
                <Input label="Password" placeholder="*******" secureTextEntry={true} onChangeText={this.onPasswordChange.bind(this)}/>
                <View style={styles.btnViewContainer}>
                    <Button
                        title="Log In"
                        backgroundColor={YELLOW}
                        width={Dimensions.get('window').width - 100}
                        onPress={this.pressed.bind(this)}

                    />

                    <Button
                        title="Sign Up"
                        backgroundColor={PINK}
                        width={Dimensions.get('window').width / 2}
                        onPress={this.props.onPress}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logInContainer : {
        flex: 1,

        justifyContent: 'center',
        backgroundColor: '#006064',
        width : Dimensions.get('window').width
    }, btnViewContainer : {

        width : Dimensions.get('window').width,
        alignItems:'flex-end',


    }
});

const mapStateToProps = state => {
        const {email, pass} = state.auth;
    return {

        email: email,
        pass : pass
    };
};

export default connect(mapStateToProps, {emailChanged, passChanged})(LogIn);