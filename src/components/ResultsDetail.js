import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ResultsList from './ResultsList';


const ResultsDetail=({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:250,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    }
});

export default ResultsDetail;