
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage, ImageBackground} from 'react-native';
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
};

const IntroScreen = props => {
    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem('name');
            setName(temp);
        }

        getName();
    }, []);
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 3000);
    }, []);

    const [name, setName] = useState('');

    // console.log(props.app.name)

    return (
        <ImageBackground source={require('../assets/background.png')} style={{ width: '100%', height: '100%'}}>
            <View style={styleSheet.container}>
                <Text style={styleSheet.nameStyle}>{`Welcome ${props.app.name}!`}</Text>
            </View>
        </ImageBackground>
    );
};

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(state => state)(IntroScreen);