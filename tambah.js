import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from "react-native";
import Header from "./Header";
import { ImageBackground } from 'react-native';
class tambah extends Component {
  static navigationOptions = {
    header: null
}
    render() {
        return (
          
              <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
          <View style={styles.container}>
            
                <Header title={"WELCOME"}/>
               
            <View style={styles.box2}>
              <View style={styles.imageContainer}>
             
              <Image source={require("./img/logo.png")} style={styles.image} />
                <Text style={styles.text1}>RARE</Text>
              <Text style={styles.text1}>COLLECTIONS</Text>
              </View>
            </View>
            
            <View style={styles.box3}>
            <TouchableHighlight activeOpacity={0.1} style={styles.buttonatas} onPress={() => this.props.navigation.navigate('tambahdalam')}>
                    <Text style={styles.Text1}>Tambah Barang Dalam Negeri</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.1} style={styles.buttonatas} onPress={() => this.props.navigation.navigate('tambahluar')}>
                    <Text style={styles.Text1}>Tambah Barang Luar Negeri</Text>
                </TouchableHighlight>
                   
               
               
            </View> 
            <View style={styles.FooterBar}>
            <TouchableHighlight activeOpacity={0.1} style={styles.buttonbawah} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.Text1}>Back</Text>
                </TouchableHighlight>
                </View>
          </View>
          </ImageBackground> 
        );
    }
}

const styles = StyleSheet.create({
 
  container: {
    //flex: 1,
   
    flexDirection: "column",
    alignItems: "center"
    
  },
  text1: {
    fontSize: 26,
    textAlign: "center",
    justifyContent: 'flex-start',
    paddingTop:1,
    fontWeight: 'bold'
  },
  FooterBar: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 175,
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    borderRadius: 2,
    width: "100%",
    borderWidth: 3,
    borderColor: "#445660",
    opacity:0.6,
  },
  imageContainer: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingBottom: 20,
    paddingTop: 20,
    position: "relative",
    marginTop:10
  },
    image: {
      width: 190,
      height: 170,
        
    },
    
  FooterText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: 'bold'
  },
  buttonatas: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#445660",
    //marginTop: 20,
    marginBottom: 10,
    height: 60,
    width: 340,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#b80000",
  },
    buttonbawah: {
        paddingTop: 12,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#445660",
       
       opacity:1,
        height: 45,
        width: 120,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: "white",
    },
    Text1: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 18
    },
  box1: {
   // flex: 0.5,
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "row"
  },
  box2: {
   // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
     // flex: 1,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,     
    
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center"
  },
  Input: {
   color:"white",
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#445660",
    borderRadius: 5,
    textAlign: "center"
},    
Text2: {
  textAlign: "center",
  height: 40,
  
  marginTop: 4,
  color: "black",
  fontSize: 18
},
});
export default tambah;