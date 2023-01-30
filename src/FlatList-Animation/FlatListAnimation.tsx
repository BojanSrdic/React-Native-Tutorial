import React from "react"
import { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image, FlatList, Animated } from "react-native"
import { StatusBar } from "expo-status-bar";

const image1 = require('../../assets/post1.jpeg');

const ITEM_SIZE = 175

const FlatListAnimation = () => {
    const scrolly = React.useRef(new Animated.Value(0)).current;

    const onCardScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrolly } } }],
        { useNativeDriver: true }
    )

    const renderCard = ({ item, index } : {item: any, index: number}) => {
        const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)]
        const opacityinputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.8)]
        const scale = scrolly.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        })
        const opacity = scrolly.interpolate({
            inputRange: opacityinputRange,
            outputRange: [1, 1, 1, 0]
        })
        return (
            <Animated.View style={[styles.container1, { transform: [{ scale }] }, { opacity }]}>
                <View style={styles.cardContainer}>
                    <Image style={styles.imageStyle} source={require('../../assets/post1.jpeg')} />
                </View>
            </Animated.View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden style="light" />
            <Animated.FlatList onScroll={onCardScroll} style={{ paddingTop: 20 }} data={seedDataHomeCard} renderItem={renderCard} 
                keyExtractor={(data) => data.id.toString()} showsVerticalScrollIndicator={false} />
        </View>
    );
}

// <StatusBar style="auto" />
/* <HomeCard key={item.id} imageURI={item.imageURI} title={item.title} scrolly={scrolly}/> */
/* <CardItem key={item.id} imageURI={item.imageURI} title={item.title} transformprop={scale} opacityprop={opacity} /> */

const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 20;
const offset = 50;
const height = 150;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#525252',
        alignItems: 'center',
    },
    footerStyle: {
        backgroundColor: '#7977979',
        paddingTop: 70,
    },
    container1: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        height: height,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: height,
        width: deviceWidth - offset,
        borderRadius: radius,
        opacity: 0.9,
    },
    textStyle: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: '800',
        alignSelf: 'center',
        textAlign: 'center',
        top: '40%',
    }
});

// Seed data

const seedDataHomeCard = [
    {
        id: 1,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 2,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 3,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 4,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 5,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 6,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 7,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 8,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 9,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 10,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 11,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 12,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 13,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 14,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 15,
        imageURI: image1,
        title: 'Disanje',
    }, {
        id: 16,
        imageURI: image1,
        title: 'Disanje',
    },
];

export default FlatListAnimation;