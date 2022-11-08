import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

export default function SearchBar() {
  return (
    <Searchbar style={{
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 100,
    }} 
    
    placeholder="Search"
    //   onChangeText={onChangeSearch}
    //   value={searchQuery}
      />
    )
}


      
