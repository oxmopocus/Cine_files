import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {init} from '@rematch/core';
import {View, Text, Dimensions, ImageBackground} from "react-native";
import {app} from "../models/appModel";
import { TextInput, Button, Appbar } from 'react-native-paper';


const store = init( {
    models: { app },
});


const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        color: "#fff",
        underlineColor: "white",
        backgroundColor: 'transparent',
        underlineColor: "blue",
        borderRadius: 100,
        width: 300,
        height: 70,
        marginBottom: 40,   
    },

    button: {
        borderRadius: 100,
        backgroundColor: '#44b5df',
        width: 300,
        height: 50,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header : {
        backgroundColor: "#44b5df",
        color: "white"
    }
};

const IntroFormScreen = props => {

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

    function submit() {
            dispatch({
                type: 'app/setName',
                payload: { name }
            });
            navigation.navigate('Welcome');
    }

    return (


        <ImageBackground source={require('../assets/background.png')} style={{ width: '100%', height: '100%'}}>

        <Appbar.Header style={styleSheet.header}>
        <Appbar.BackAction color="white" onPress={this._goBack} />
        <Appbar.Content color="white" title="Sign in" subtitle="Informations" />
        </Appbar.Header>
        
            <View style={styleSheet.container}>
                <Text style={{ color: '#fff' }}>Change ton nom ci-dessous</Text>
                <TextInput mode="flat" label="Type your name" style={styleSheet.input} onChangeText={(text) => setName(text)} value={name} theme={{colors:{ primary:'white', background:'white' }}} />
                <Button icon="send" mode="contained" onPress={submit} style={styleSheet.button}  title="Submit">Submit</Button>
            </View>
        </ImageBackground>

    )};

IntroFormScreen.propTypes = {
    dispatch:PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(state => state)(IntroFormScreen);