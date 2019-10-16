import React from 'react';
import { connect } from 'react-redux'; 
import { View, Text, Dimensions, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'lightgrey',
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

    }
};


const ListItem = (props) => {

    function handleDelete() {
        dispatch({ 
            type: 'app/deleteCity', 
            payload: {index}
         })
    }

    const {data, dispatch, index} = props;

    return(
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>{`Ville: ${data.name}`}</Text>
            <Text style={styleSheet.textStyle}>{`Temperature: ${Math.round(data.main.temp)}°C`}</Text>
            <AntDesign name="delete" size={20} color="red" onPress={handleDelete}/>
        </View>
    );
} 

export default connect()(ListItem);
