import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  TouchableOpacity,  TextInput, ImageBackground, Image,  FlatList,  ScrollView,  Modal,  Alert} from "react-native";
import { Icon, Card, Divider } from "react-native-elements";

const axios = require("axios");
import Header from "./Header";

class update extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      kode_barang: "",
      nama_barang: "",
      jenis_barangid:'',
      asal_barang:'',
      ket:'',
      image: "",
      srcImg: "",
      uri: "",
      fileName: ""
    };
  }
  componentDidMount() {
    this.setState({
        kode_barang: this.props.navigation.state.params.kode_barang,
        nama_barang: this.props.navigation.state.params.nama_barang,
        jenis_barangid: this.props.navigation.state.params.jenis_barangid,
        asal_barang: this.props.navigation.state.params.asal_barang,
      ket: this.props.navigation.state.params.ket,
       image: this.props.navigation.state.params.image
    });
  }
  upload() {
    this.uploadPicture();
    axios
      .post("http://inventariuniversal.000webhostapp.com/API/upatebarang.php", {
        kode_barang: this.state.kode_barang,
        nama_barang: this.state.nama_barang,
        jenis_barangid: this.state.jenis_barangid,
        asal_barang: this.state.asal_barang,
        ket: this.state.ket,
        image: this.state.image
      })
      .then(response => {
        console.log("Status  " + response);
        console.log(response);
        Alert.alert(response.data.pesan);
      })
      .catch(function(error) {
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

  submit() {
    this.upload();
  }
  render() {
    return (
        <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
      <View style={styles.container}>
        <Header title={"EDIT DATA BARANG"} />
        <View style={styles.box1}>
          
        </View>
        <ScrollView>
          <View style={styles.box0}>
          <Text style={styles.text1}>Kode Barang </Text>
            <TextInput
              placeholder="kode barang"
              onChangeText={kode_barang => this.setState({ kode_barang })}
              value={this.state.kode_barang}
              disabled
              editable={false}
              style={styles.Inputdis}
            />
             </View>
              <View style={styles.box1}>
 <Text style={styles.text1}>Nama Barang</Text>
            <TextInput
              placeholder="Nama Barang"
              onChangeText={nama_barang => this.setState({ nama_barang })}
              style={styles.Input}
              value={this.state.nama_barang}
            />
             </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Jenis Barang</Text>
            <TextInput
              placeholder="1 (Luar Negeri) or 2 (Dalam Negeri)"
              onChangeText={jenis_barangid => this.setState({ jenis_barangid })}
              style={styles.Input}
              value={this.state.jenis_barangid}
            />
             </View>
              <View style={styles.box1}>
             <Text style={styles.text1}>Asal Barang  </Text>
            <TextInput
              placeholder="Asal Barang"
              onChangeText={asal_barang =>
                this.setState({ asal_barang })
              }
              style={styles.Input}
              value={this.state.asal_barang}
            />
             </View>
              <View style={styles.box1}>
             <Text style={styles.text1}>Keterangan   </Text>
            <TextInput
              placeholder="Keterangan"
              onChangeText={ket => this.setState({ ket })}
              style={styles.Input}
              value={this.state.ket}
            />
            </View>
            <View style={styles.box1}>
        </View>
        </ScrollView>
        <TouchableOpacity onPress={this.choosePicture.bind(this)}>
            <View style={styles.image}>
              {this.state.srcImg ? (
                <Image source={this.state.srcImg} style={styles.image} />
              ) : (
                <Image
                  source={{
                    uri:
                      "http://inventariuniversal.000webhostapp.com/API/upload/" +
                      this.state.image
                  }}
                  style={styles.image}
                />
              )}
            </View>
          </TouchableOpacity>
        
        <View style={styles.box2}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => this.submit()}
          >
            <Text style={styles.Text2}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
               
         
         flexDirection: "column",
         alignItems: "center",
         
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
     button: {
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
          width: 220,
       marginLeft:50,
       height: 50,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: "#fff",
       borderWidth: 1,
       borderColor: "#445660",
       borderRadius: 5,
       textAlign: "center"
     },   
     Inputdis: {
       width: 220,
       marginLeft:50,
       height: 50,
       alignItems: "center",
       justifyContent: "center",
       backgroundColor: "#969696",
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
//   box1: {
//     //borderWidth: 1,
//     marginTop: 20,
//     marginBottom: 10,
//     alignItems: "center",
//     marginLeft: 20,
//     marginRight: 20
//   },
//   box2: {
//     //borderWidth: 1,
//     marginTop: 15,
//     marginLeft: 30,
//     marginRight: 30,
//     height: 300
//   },
//   box3: {
//     //borderWidth: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 5,
//     marginLeft: 30,
//     marginRight: 30,
//     borderBottomWidth: 1,
//     paddingTop: 3,
//     paddingBottom: 3
//   },
//   box4: {
//     //borderWidth: 1,
//     marginLeft: 70,
//     marginRight: 70,
//     paddingBottom: 20,
//     marginBottom: 10,
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   buttonStyle: {
//     backgroundColor: "#F08080",
//     height: 40,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 100
//   },
//   deleteStyle: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     backgroundColor: "red",
//     height: 40,
//     borderRadius: 5,
//     alignItems: "center",
//     width: 100,
//     flexDirection: "row",
//     paddingLeft: 10
//   },
//   text: {
//     fontSize: 20
//   },
//   text2: {
//     fontSize: 18,
//     color: "#fff"
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderColor: "#000",
//     borderWidth: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   profile: {
//     //borderWidth: 1,
//     marginTop: 10,
//     marginLeft: 30,
//     marginRight: 30,
//     color: "#F08080",
//     fontSize: 20
//   },
//   textInput: {
//     borderWidth: 1,
//     justifyContent: "center",
//     height: 40,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10
//   },
//   textInput2: {
//     borderWidth: 1,
//     justifyContent: "center",
//     height: 40,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//     width: 210,
//     marginRight: 10
//   },
//   box5: {
//     //borderWidth: 1,
//     flexDirection: "row"
//   },
//   qr: {
//     paddingTop: 10,
//     paddingBottom: 10,
//     backgroundColor: "#F08080",
//     height: 40,
//     borderRadius: 5,
//     alignItems: "center",
//     width: 80,
//     flexDirection: "row",
//     paddingLeft: 10
//   },
//   box6: {
//     //borderWidth: 1,
//     marginTop: 10,
//     marginBottom: 10,
//     alignItems: "center",
//     marginLeft: 20,
//     marginRight: 20
//   }
  
});
export default update;