import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { HeaderHeightContext } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';

const SearchBar=({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
             style={styles.inputStyle}
              placeholder="Search"
              value={term}
              onChangeText={newTerm=>onTermChange(newTerm)}
              onEndEditing={()=> onTermSubmit()}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'gray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop:15,
        marginBottom:10,
        flexDirection: 'row'
    },
    inputStyle:{
         flex: 1,
         fontSize:18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15

    }
});

export default SearchBar;