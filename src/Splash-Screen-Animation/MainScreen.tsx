import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, FlatList} from "react-native"
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CardComponentSS from "./CardComponentSS";

const image1 = require('../../assets/post1.jpeg');
const image2 = require('../../assets/post2.jpeg');
const image3 = require('../../assets/post3.jpeg');
const image4 = require('../../assets/post4.jpeg');
const image5 = require('../../assets/post5.jpeg');

const MainScreen = () => {
    const edges = useSafeAreaInsets();
    
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={{ paddingTop: (edges.top + 65) }}>
            <FlatList 
                data = {seedDataHomeCard} 
                renderItem={({item}) => {
                    return<CardComponentSS key={item.id} imageURI={item.imageURI} title={item.title}/>
                }} 
                keyExtractor={(data) => data.id.toString()}
                showsVerticalScrollIndicator={false} 
            />
            </View>
        </View>
    );
}

// <StatusBar style="auto" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95baf7',
        alignItems: 'center',
    }
});

// Seed data

const seedDataHomeCard = [
    {
        id: 1,
        imageURI: image1,
        title: 'Disanje',
    },
    {
        id: 2,
        imageURI: image2,
        title: 'Emocije',
    },
    {
        id: 3,
        imageURI: image3,
        title: 'Ishrana',
    },
    {
        id: 4,
        imageURI: image4,
        title: 'Treninzi',
    },
    {
        id: 5,
        imageURI: image5,
        title: 'Recepti',
    },
    {
        id: 6,
        imageURI: image1,
        title: 'Roditeljstvo',
    },
    {
        id: 7,
        imageURI: image2,
        title: 'Finansije',
    },
    {
        id: 8,
        imageURI: image3,
        title: 'Meditacija',
    },
    {
        id: 9,
        imageURI: image4,
        title: 'Muzika za fokus',
    },
];

export default MainScreen;