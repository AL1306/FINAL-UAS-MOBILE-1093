import React from 'react'; 
import { View,FlatList,Text, ImageBackground,StyleSheet } from 'react-native' 
import { ListItem } from 'react-native-elements' 
import Header from "./Header";
const axios = require('axios');


class dalamnegri extends React.Component{ 
constructor(props) { 
super(props); 
this.state = { 
kode_barang: [], 
}; 
} 

componentDidMount(){ 
axios.get("http://inventariuniversal.000webhostapp.com/API/getbarang.php?jenis_barangid=2").then( (response)=>{ 
console.log(response.data); 
this.setState({ data:response.data }); 
}) 
.catch(function (error) { 
console.log(error); 
}); 
} 
static navigationOptions = {
  header: null
}
render() { 
return ( 
  <ImageBackground source={require("./img/bc.png")} style={{width: '100%', height:'100%'}} >
<View> 
<Header title={"BARANG DALAM NEGERI"}/>
<FlatList 
keyExtractor={(item, index) => index.toString()} 
data={this.state.data} 
renderItem={({ item }) => ( 
<ListItem style={styles.list} onPress={()=>     this.props.navigation.navigate('detail',{kode_barang:item.kode_barang,nama_barang:item.nama_barang})}
title={item.nama_barang} 
leftAvatar={{source: { uri:"http://inventariuniversal.000webhostapp.com/API/upload/"+ item.image},
}} 
/> ) } /> 
 
</View> 
</ImageBackground>
) } } 
const styles = StyleSheet.create({
  list: {
      marginTop: 10,
     
     // marginRight: 10
  },
});
export default dalamnegri;
