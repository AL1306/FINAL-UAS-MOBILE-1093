
import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.title} </Text>
        </View>
        );
     
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
       opacity:0.6,
        paddingBottom: 9,
        paddingTop: 11,        
        height: 60,
        borderRadius: 2,
        borderWidth: 3,
        borderColor: "#ff4242",
        width: "100%",
        position: "relative",
    },

    headerText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: 'bold'
    },

});
export default Header;
