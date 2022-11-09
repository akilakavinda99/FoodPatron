import { View, Text } from 'react-native'
import React from 'react'
import { FAB, IconButton, TextInput } from "react-native-paper";
import SearchBar from '../../components/requester/SearchBar';
import RequestCard from '../../components/requester/RequestCard';

export default function MyRequests() {
  return (
    <View style={{
        backgroundColor: 'white',
        height: '100%',
    }}>

        <View style={{flexDirection: 'row', marginTop: 20}}>
            <IconButton icon="arrow-left" style={{
                marginLeft: 25,
                marginTop: 12, 
            }} />
            <Text style={{
                marginTop: 15,
                marginLeft: 50,
                fontSize: 20,
                fontWeight: 'bold',
            }}> My Fund Requests</Text>
        </View>

        <SearchBar />

        <RequestCard />
        
      
    </View>
  )
}