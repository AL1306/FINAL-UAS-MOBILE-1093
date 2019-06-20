import React, { Component } from "react";
import {View,Text,StyleSheet,Image,Alert,TouchableHighlight,TextInput } from "react-native";
import Header from "./Header";
import { ImageBackground } from 'react-native';
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {username: '',password: '',};
  } 
  Login= () =>{
    if(this.state.username == 'Admin' && this.state.password == 'Admin'){
      this.props.navigation.navigate('Home')
    }else{
      Alert.alert('Wrong username and password!');
    }
  }
    render() {
        return (
          <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
          <View style={styles.containerMain}>
              <Header title={"LOGIN"}/>
            <View style={styles.box1}>
              <View>
              <Text style={styles.text1}>RARE</Text>
              <Text style={styles.text1}>COLLECTIONS</Text>
                <Image source={require("./img/logo.png")} style={styles.image} />
              </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.Input}>
                    <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Username "  onChangeText={(username) => this.setState({ username })}/>
                </View>
                <View style={styles.Input}>
                    <TextInput style={{textAlign: 'center', color: 'black'}} placeholder=" Password "onChangeText={(password) => this.setState({ password })}/>
                </View>
            </View>
            <View style={styles.box3}>
                    <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} onPress={() => this.Login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
               
          </View>
          </ImageBackground> 
        );
    }
}
const styles = StyleSheet.create({
  containerMain: {
    //flex: 1,
    flexDirection: 'column',
    alignItems: "center",  
  },
  text1: {
    fontSize: 26,
    textAlign: "center",
    justifyContent: 'flex-start',
    paddingTop:1,
    fontWeight: 'bold'
  },

  image: {
    height: 155,
    
    width: 165,
    borderRadius: 210,
    borderWidth: 3,
    borderColor: "#445660",
  },
  Textfooter: {
    fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: 'bold'
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#445660",
    marginTop: 10,
    marginBottom: 20,
    height: 40,
    width: 200,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#b80000",
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box1: {
    //flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  box2: {
    //flex: 0.6,
    width: "100%",
    paddingTop: 20,
    marginTop: 20,
    marginLeft: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  
  },  
  box3: {
   // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 120,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  

Input: {
    alignItems: 'center',    
    borderColor: '#445660',
    borderWidth: 2,
    justifyContent: 'center',
    height: 50,
    width: 200,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor:"white",
    opacity:1
},
});
export default Login;