import React from "react"
import {View, Text, StyleSheet, Dimensions, Image} from "react-native"

type HeaderProps = {
    name: string;
}

const Header = ({name}: HeaderProps) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.labelStyle}>{name}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        width: deviceWidth,
        height:90,
        backgroundColor: '#404040',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center',
    },
    labelStyle:{
        fontSize: 24,
        fontWeight: '700',
    }
});


export default Header;