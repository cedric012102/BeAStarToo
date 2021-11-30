import React from 'react';
import {View} from 'react-native';
import styles from './styles/searchbox-style';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <View style={styles.container}> 
        <input 
        type='search' 
        placeholder='search user' 
        onChange={searchChange}
        />
        </View>
    );
}

export default SearchBox;