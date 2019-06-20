import React, { Component } from "react";
import { View,  Text,  StyleSheet,  ImageBackground, Alert, TextInput,  ScrollView,  Image,  FlatList,  TouchableOpacity} from "react-native";
import Header from "./Header";

import { Icon, Card, Divider } from "react-native-elements";
const axios = require("axios");

class detail extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          kode_barang: this.props.navigation.state.params.kode_barang,
          nama_barang: this.props.navigation.state.params.nama_barang,
          
        };
      }
      componentDidMount() {
        axios
          .get(
            "http://inventariuniversal.000webhostapp.com/API/getbarangdetail.php?kode_barang="+this.state.kode_barang
          )
          .then(response => {
            console.log(response.data);
            this.setState({ data: response.data });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      }
    

    render() {

            return (
              <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
                <View style={styles.container}>
                  <Header title={this.state.nama_barang} />
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                      <View style={styles.box1}>
                        <View style={styles.image}>
                          <Image
                            source={{
                              uri:
                                "http://inventariuniversal.000webhostapp.com/API/upload/"+item.image
                            }}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    )}
                  />
                  
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                      
                      <View style={styles.box2}>
                         <Text style={styles.text1}>Kode Barang [ {item.kode_barang} ]</Text>
                         
                       <ScrollView>
                    
                         <View style={styles.box33}>
                         <Text style={styles.text22}>Nama Barang : </Text>
                         <Text style={styles.text2}>{item.nama_barang}</Text>
                         </View>
                         <View style={styles.box3}>
                         <Text style={styles.text22}>Asal barang    : </Text>
                         <Text style={styles.text2}>{item.asal_barang}</Text>
                         </View>
                         <View style={styles.box10}>
                         <Text style={styles.text22}>Keterangan     : </Text>
                         <Text style={styles.text2}>{item.ket}</Text>
                         </View>
                       </ScrollView>
                    
                        <View style={styles.box4}>
                          
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.editStyle}
                      onPress={() =>
                        this.props.navigation.navigate("update"
                          ,{kode_barang:item.kode_barang})}
                      
                    >
                      
                      
                      <Text style={styles.texttombol}>Edit  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.hapusStyle}
                      onPress={() => {
                        Alert.alert(
                          "Perhatian!",
                          "Hapus Barang " + this.state.data[0].nama_barang + " ?",
                          [
                            {
                              text: "KEMBALI",
                              onPress: () => console.log("Cancel ditekan"),
                              style: "cancel"
                            },
                            {
                              text: "IYA",
                              onPress: () =>
                                {
                                  axios
                                    .post(
                                      "http://inventariuniversal.000webhostapp.com/API/hapusbarang.php",
                                      {
                                        kode_barang: this.state
                                          .kode_barang
                                      }
                                    )
                                    .then(response => {
                                      console.log(
                                        "Status  " + response
                                      );
                                      console.log(response);
                                      this.props.navigation.navigate('Home');
                                    })
                                    .catch(function(error) {
                                      console.log(error);
                                    });
                                }
                            }
                          ],
                          { cancelable: true }
                        );
                      }}
                    >
                     
                      <Text style={styles.texttombol}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
                      </View>
                    )}
                  />
          
             
                </View>
                </ImageBackground>
   );
}
}



const styles = StyleSheet.create({
    container: {
        
      flexDirection: "column",
      alignItems: "center"
    },
    box1: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        
    },
    
    
    texttombol: {
       
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
       fontSize: 18,
        color: "#fff"

    },
    text1: {
      fontSize: 18,
      textAlign: "left",
      justifyContent: 'flex-start',
      paddingTop: 8,
      paddingBottom: 12,
      fontWeight: 'bold',
      color:"red",
      paddingLeft: 25,
    },
    text2: {
      fontSize: 14,
      textAlign: "left",
      justifyContent: 'flex-start',
      fontWeight: '100',
      color:"black",

     // paddingRight: 30,
    },
    text22: {
      fontSize: 14,
      textAlign: "left",
      justifyContent: 'flex-start',
      fontWeight: '100',
      color:"black",
      fontWeight: 'bold',
     // paddingRight: 30,
    },
    
    
      box2: {
        borderWidth: 1,
        marginTop: 15,
       // marginLeft: 30,
        //marginBottom: 100,
        height: 380, 
        width:350,
        borderColor:"red",
        backgroundColor:"white",
       opacity:0.8
      },
      box3: {
        //borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        
        marginLeft: 30,
        marginRight: 30,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor:"pink",
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor:"white",
        paddingRight:100
      },
      box33: {
        //borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        
        marginLeft: 30,
        marginRight: 30,
        //borderBottomWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor:"pink",
        paddingRight:100
      },
      box10: {
        //borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        //borderBottomWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor:"pink",
        paddingRight:100
      },
      box4: {
        //borderWidth: 1,
        marginLeft: 35,
        marginRight: 30,
        paddingBottom: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
      },
      editStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#ffc014",
        borderColor:"#ffd154",
        height: 40,
        borderWidth:1,
        borderRadius: 8,
        alignItems: "center",
        width: 120,
        paddingLeft: 10,
        paddingLeft: 10,
        marginRight:40
      },
      hapusStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "red",
        height: 40,
        borderRadius: 5,
        borderWidth:1,
        borderColor:"#ff4242",
        alignItems: "center",
        width: 120,
        
        paddingLeft: 10,
        paddingRight: 10,
        marginRight:20,
      },
      
      image: {
        width: 250,
        height: 250,
        borderColor: "red",
        borderWidth: 1,
        borderRadius:180,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white"
      },
      teksdetail: {
        //borderWidth: 1,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        color: "red",
        fontSize: 20
      }


});
export default detail;