import React from "react"
import {View, Text, StyleSheet, Dimensions, Image, Animated} from "react-native"

type HomeCardProps = {
    imageURI: any;
    title: string;
}

const CardItem = ({imageURI, title}: HomeCardProps) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.cardContainer}>
                <Image style = {styles.imageStyle} source={imageURI} />
                <Text style={styles.textStyle}>{title}</Text>
            </View>
        </View>
    );
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const radius = 20;
const offset = 50;
const height = 150;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: { 
    
        width: deviceWidth - offset, 
        height: height,
        backgroundColor: '#a29bfe',
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
    imageStyle:{
        height: height,
        width: deviceWidth - offset,
        borderRadius: radius,
        opacity: 0.9,
    },
    textStyle:{
        position: 'absolute',
        fontSize: 20, 
        fontWeight: '800',
        alignSelf: 'center', 
        textAlign: 'center', 
        top: '40%', 
    }
});

export default CardItem;