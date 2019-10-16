import React, { useState } from 'react';
import {connect} from 'react-redux';
import { View, Text, Dimensions, AsyncStorage, ImageBackground } from 'react-native';
// import { Button } from 'react-native-elements'
import PropTypes from 'prop-types';
import { TextInput, Button, Appbar } from 'react-native-paper';

const { width } = Dimensions.get('window');

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
        color: "white",
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
    async function handleSubmit(){
        if(name !== ''){
            await AsyncStorage.setItem('name', name);
            navigation.navigate('Welcome');
        }
    }

    // const [name, setName] = useState('');
    const {dispatch, navigation,  app: {name} }= props;

    return(


        <ImageBackground source={require('../assets/background.png')} style={{ width: '100%', height: '100%'}}>

        <Appbar.Header color="white" style={styleSheet.header}>
        <Appbar.BackAction color="white" onPress={this._goBack} />
          <Appbar.Content color="white" title="Sign in" subtitle="Informations" />
        </Appbar.Header>
            <View style={styleSheet.container}>
                <TextInput mode="flat" label="Type your name" style={styleSheet.input} onChangeText={(text) => setName(text)} value={name} theme={{colors:{ primary:'white', background:'white' }}} />
                <Button icon="send" mode="contained" onPress={handleSubmit} style={styleSheet.button}  title="Submit">Submit</Button>
            </View>
        </ImageBackground>

    );
}

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};



export default connect()(IntroFormScreen);