import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {init} from '@rematch/core';
import {app} from "../models/appModel";
import {TextInput, Button, Appbar, List} from 'react-native-paper';
import {Icon} from "react-native-elements";
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import {color} from "react-native-reanimated";


const store = init( {
    models: { app },
});


const {width} = Dimensions.get('window');

const styleSheet = {

Icon:{
  height: 10,
  width: 10,
},
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:50
    },
    name:{
        marginTop: 150,
        textAlign: 'center',
        fontSize:22,
        color:"#fff",
        fontWeight:'900',
    },
    headerImg:{
        backgroundColor: "#e50913",
        height:250,
    },


    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },

    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#000",
        marginTop:10,
        textAlign: 'center'
    },
};

const IntroFormScreen = props => {

    const {dispatch, navigation} = props;

    return (
        <View style={styleSheet.container}>
            <View style={styleSheet.headerImg}>
                <Text style={styleSheet.name}>ANTOINE G.</Text>
                <Text style={{ textAlign:'center', color:'white', marginTop: 10 }}><Text style={{ fontWeight: 'bold'}}>02</Text> Comments       <Text style={{ fontWeight: 'bold'}}>16</Text> Films liked</Text>
            </View>
            <Image style={styleSheet.avatar} source={require('../assets/ag.png') }/>
            <List.Subheader style={{ backgroundColor: '#000', color:'#fff'}}><Text style={{textAlign:'center', fontWeight: 'bold', textDecorationLine: 'underline' , color: '#e50913' }}>ACTIVITY</Text>             LIKED             FAVORITE ACTORS              FAVORITES PRODUCERS              </List.Subheader>
<ScrollView>
            <List.Section style={{ color: '#fff', marginTop: 0}} >
                <List.Item
                    style={{ backgroundColor : '#262626' }}
                    title="YOU"
                    description="has added Harry Potter et l'Ordre du phoenix on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
                <List.Item
                    style={{ backgroundColor : '#000' }}
                    title="YOU"
                    description="has added Interstellar on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />

                <List.Item
                    style={{ backgroundColor : '#262626'}}
                    title="YOU"
                    description="has added MadMax Fury 2 on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
                <List.Item
                    style={{ backgroundColor : '#000'}}
                    title="YOU"
                    description="has added Indiana Jones et le Temple maudit on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
                <List.Item
                    style={{ backgroundColor : '#262626'}}
                    title="YOU"
                    description="has added Harry potter et l'ordre du phoenix"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
                <List.Item
                    style={{ backgroundColor : '#000'}}
                    title="YOU"
                    description="has added MadMax Fury 2 on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
                <List.Item
                    style={{ backgroundColor : '#262626'}}
                    title="YOU"
                    description="has added Indiana Jones et le Temple maudit on your Watchlist"
                    titleStyle={{ color : '#e50913', fontWeight: "900"}}
                    descriptionStyle={{ color: '#fff'}}
                    left={() => <Image style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: 'white'}} source={require('../assets/ag.png') }/>}
                />
            </List.Section>
</ScrollView>
        </View>
    )};

IntroFormScreen.propTypes = {
    dispatch:PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect(state => state)(IntroFormScreen);


