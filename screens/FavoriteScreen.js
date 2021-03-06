import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, FlatList, ImageBackground} from "react-native";
import {Button, Header} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import {connect} from 'react-redux';
import ListItem from '../components/ListItem';
import {List} from "react-native-paper";

const styleSheet = {
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 24,
    },

};

const FavoriteScreen = props => {

    const [city, setCity] = useState('');
    const {dispatch} = props;
    const {cities, informations} = props;

    function handleSubmit() {
        if (city !== '') {
            dispatch({
                type: 'app/addCity',
                payload: {city},
            });
        }
    }

    return (
        <View>
            <Header
                leftComponent={<ImageBackground
                    source={require('../assets/logo.png')}
                    style={{ width: 40, height: 40 }}
                />}
                centerComponent={{ text: 'FAVORITES', style: { fontWeight: '900', color: '#e50913' } }}
                rightComponent={{ icon: 'search', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#000',
                    borderBottomWidth: 0,
                }}
            />
            <List.Subheader style={{ backgroundColor: '#000', color:'#fff', textAlign: 'center' }}>MOVIES            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' , color: '#e50913' }}>FAVORITES</Text></List.Subheader>

        </View>
    );

};

export default connect(state => state.app)(FavoriteScreen);