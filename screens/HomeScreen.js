
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage, ImageBackground, FlatList, TouchableOpacity, Image, Modal, ScrollView, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import ListItem from '../components/ListItem';
import { SearchBar, Header } from 'react-native-elements';
import {Appbar, DataTable, List} from "react-native-paper";
import * as json from '../utils/film'

const list_film = json[0];


const {width} = Dimensions.get('window');


const styleSheet = {

    submenu: {
        textColor: '#fff',
        backgroundColor: '#000',
    },

    header: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        backgroundColor: '#000',
    },

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
    flatlist : {
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

        navigator.geolocation.getCurrentPosition((location) =>  {
            dispatch({type: 'app/getMeteoInformations', payload: location});
        });
    }

    useEffect(() => {
        if(Object.keys(informations).length < 1) _getLocationAsync();
    }, []);
    
    return (

        <View>
            <Header
                leftComponent={<ImageBackground
                    source={require('../assets/logo.png')}
                    style={{ width: 40, height: 40}}
                />}
                centerComponent={{ text: 'MOVIES', style: { color: '#e50913', fontWeight: '900' } }}
                rightComponent={{ icon: 'search', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#000',
                    borderBottomWidth: 0,
                }}
            />
            <List.Subheader style={{backgroundColor: '#000', color:'#fff' }}><Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' , color: '#e50913' }}>FOR YOU</Text>             TOP             ACTION              COMEDY              FAMILY</List.Subheader>
        </View>
    );
};

export default connect(state => state.app)(HomeScreen);