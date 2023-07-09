import { View, Text, ScrollView, Dimensions,Linking,TouchableOpacity,Image } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../utils/Colors";
import MiniWa from '../../assets/images/miniWa.png';
import StylesFont from "../utils/StylesFont";
import { SafeAreaView } from "react-native-safe-area-context";
import MyButton from "../components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../apis/LoginApi";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Profil = ({navigation}) => {
  const [data, setData] = useState([]);
  const getUserData = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      const res = await getUser(token);
      // console.log(res.data);
      setData(res.data);
    });
  };
  const logout = async () => {
    await AsyncStorage.clear().then(() => {
      navigation.navigate("WelcomeScreen");
    });
  };
  useEffect(() => {
    getUserData()
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: width,
            height: height / 9,
            borderBottomLeftRadius: width / 15,
            borderBottomRightRadius: width / 15,
            // borderWidth: 1,
            backgroundColor: Colors.PrimaryColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[StylesFont.boldh2, { color: "#fff" }]}>
            Pesanan Anda
          </Text>
        </View>
        <View style={{height:height/2,justifyContent:"center"}}><View style={{ flexDirection: "column", marginHorizontal: width / 20,paddingHorizontal:width/20,borderWidth:1,borderColor:Colors.PrimaryColor,borderRadius:10,backgroundColor:Colors.LightPurple,paddingVertical:width/20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>Nama Lengkap</Text><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>{data.name}</Text></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>No.Telepon</Text><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>{data.phone}</Text></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>Email</Text><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>{data.email}</Text></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>Alamat</Text><Text style={[StylesFont.mediumh5, { color: "#535559" }]}>{data.address}</Text></View>
        </View></View>
        <View>

        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginHorizontal: width / 20,paddingHorizontal:width/20,borderWidth:1,borderColor:Colors.PrimaryColor,borderRadius:10,backgroundColor:Colors.LightPurple,paddingVertical:width/20 }}><TouchableOpacity
          onPress={() =>
            Linking.openURL('http://api.whatsapp.com/send?phone=+6282367285555')
          }
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={MiniWa} />
          <Text style={[StylesFont.regularSmall, {color: 'black'}]}>
            Call Center
          </Text>
        </TouchableOpacity>
        <Text>Jika ingin tau info lebih lanjut{"\n"}silahkan hubungi Call Center</Text></View>
        <View style={{paddingHorizontal:width/20,marginVertical:20}}>

        <MyButton title="Logout" action={()=>logout()}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profil;
