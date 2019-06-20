import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput,ImageBackground,Image   } from "react-native";
import { Icon } from 'react-native-elements';

import Header from "./Header";

const axios = require('axios');
class tambahluar extends Component {   
    static navigationOptions = {
        header: null
    } 
    constructor(props) {
        super(props);
        this.state = {
          
            kode_barang: '',
            nama_barang: '',
            jenis_barangid: 1,
            asal_barang: '',
            ket:'',
            image: ''
            
        };
    }
    UpFoto(){
      this.uploadPicture();
      axios.post("http://inventariuniversal.000webhostapp.com/API/tambahbarang.php", {
        kode_barang: this.state.kode_barang,
        nama_barang: this.state.nama_barang,
        jenis_barangid: this.state.jenis_barangid,
        asal_barang: this.state.asal_barang,
        ket: this.state.ket,
        image: this.state.image,
      })
      .then((response) => {
          console.log("Status update trx  "+response);
            console.log(response);
        }
      )
      .catch(function (error) {
        console.log(error);
      });
    }
    choosePicture = () => {
      console.log("upload");
      var ImagePicker = require("react-native-image-picker");
      var options = {
        title: "Pilih Gambar",
        storageOptions: {
          skipBackup: true,
          path: "images"
        }
      };
      ImagePicker.showImagePicker(options, response => {
        console.log("Response = ", response);
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          let source = { uri: response.uri };
          console.log(source);
          console.log(response.fileName);
          this.setState({
            srcImg: source,
            uri: response.uri,
            fileName: response.fileName,
            image: response.fileName
          });
        }
      });
    };
    uploadPicture = () => {
      const data = new FormData();
      data.append("fileToUpload", {
        uri: this.state.uri,
        type: "image/jpeg", // or photo.type
        name: this.state.fileName
      });
      const url =
        "http://inventariuniversal.000webhostapp.com/API/tambahimg.php";
      fetch(url, {
        method: "post",
        body: data
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            loading: false
          });
        });
    };
  
    submit () {
      this.UpFoto();
    };
    render() {
        
        return (
            <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
            <View style={styles.container}>
              <Header title={"TAMBAH BARANG LUAR NEGERI"}/>
             
              <View style={styles.box0}>
              <Text style={styles.text1}>Kode Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={kode_barang => this.setState({ kode_barang })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Nama Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={nama_barang => this.setState({ nama_barang })}
                />
              </View>
             
              <View style={styles.box1}>
              <Text style={styles.text1}>Asal Barang</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={asal_barang => this.setState({ asal_barang })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Keterangan</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={ket => this.setState({ ket })}
                />
              </View>
              <TouchableHighlight
                large
                transparent
                onPress={this.choosePicture.bind(this)}
              >
                <View
                  style={styles.uploadFoto}
                >
                  {this.state.srcImg === null ? (
                   <Icon
                   reverse
                   name='camera'
                   color='red'
                      />
                  ) : (
                    <Image
                      source={this.state.srcImg}
                      style={styles.image}
                    />
                  )}
                </View>
              </TouchableHighlight>
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttons}
                  onPress={() =>     
                    this.UpFoto()
                  }
      >
                  <Text style={styles.Text2}>TAMBAH BARANG</Text>
                </TouchableHighlight>
              </View>
             
                       
            </View>            
          
            </ImageBackground> 
        );
    }
}
const styles = StyleSheet.create({
    container: {
       // flex: 1,        
        
        flexDirection: "column",
        alignItems: "center"
    },
    Text2: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "white",
        fontSize: 20

    },
    text1: {
      fontSize: 16,
      textAlign: "left",
      justifyContent: 'flex-start',
      paddingTop: 12,
      fontWeight: 'bold',
      color:"white"
    },
    buttons: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#445660",
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        width: "100%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#b80000",
    },
    box1: {
        //flex: 0.1,
        width: "90%",
        paddingTop: 0,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
       
    },
    box0: {
      //flex: 0.1,
      width: "90%",
      paddingTop: 0,
      marginTop: 40,
      marginLeft: 2,
      justifyContent: "space-between",
      flexDirection: "row"
     
  },
    box2: {
      // flex: 0.1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
        
    },
    Input: {
        width: 250,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#445660",
        borderRadius: 5,
        textAlign: "center"
    },    
     image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
     
    },
});
export default tambahluar;