import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage, ImageBackground, FlatList} from 'react-native';
import * as Permissions from 'expo-permissions';
import ListItem from '../components/ListItem';
import {SearchBar, Header, Image} from 'react-native-elements';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    errorStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
    flatlist: {
        paddingTop: 15,
    }
};

const HomeScreen = props => {

    const {cities, informations, dispatch} = props;

    async function _getLocationAsync() {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setError('Permission to access location was denied');
        }

        navigator.geolocation.getCurrentPosition((location) => {
            dispatch({type: 'app/getMeteoInformations', payload: location});
        });
    }

    useEffect(() => {
        if (Object.keys(informations).length < 1) _getLocationAsync();
    }, []);

    console.log(informations);


    return (

        <View>

            <Header
                leftComponent={<ImageBackground
                    source={require('../assets/logo.png')}
                    style={{width: 40, height: 40}}
                />}
                centerComponent={{text: 'MOVIES', style: {color: '#e50913'}}}
                rightComponent={{icon: 'search', color: '#fff'}}
                containerStyle={{
                    backgroundColor: '#000',
                    justifyContent: 'space-around',
                }}
            />

            <FlatList style={styleSheet.flatlist}/>

        </View>


    );
};

export default connect(state => state.app)(HomeScreen);