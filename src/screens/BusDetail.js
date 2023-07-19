import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import picIndrapura from "../../assets/images/indrapura.jpeg";
import picAekKanopan from "../../assets/images/aekkanopan.jpg";
import picAekNabara from "../../assets/images/AekNabara.jpg";
import picKisaran from "../../assets/images/Kisaran.jpg";
import picRantauPrapat from "../../assets/images/RantauPrapat.jpg";
import picTebing from "../../assets/images/Tebingtinggi.jpg";
import picSimangambat from "../../assets/images/Simangambat.jpg";
import picSipiongot from "../../assets/images/sipiongot.jpg";

import StylesFont from "../utils/StylesFont";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import axios from "axios";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const BusDetail = ({ route, navigation }) => {
  const [dataBus, setDataBus] = useState([]);
  const { id } = route.params;
  const getBusDetail = async () => {
    const res = await axios.get(`http://192.168.100.36:8080/api/bus/${id}`);
    // console.log(res.data.data);
    setDataBus(res.data.data);
    // });
  };

  console.log(dataBus.id);

  useEffect(() => {
    getBusDetail();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <View
        style={{
          padding: width / 30,
          height: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: "10%" }}
        >
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            width: "90%",

            // marginTop: width / 30,
            // borderWidth: 1,
            // position: "absolute",
            alignItems: "center",
            // justifyContent: "flex-end",
          }}
        >
          <Text
            style={[StylesFont.boldh3, { color: "white", right: width / 24 }]}
          >
            Detail Bus
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          height: "90%",
          borderTopLeftRadius: width / 10,
          borderTopRightRadius: width / 10,
          padding: width / 30,
        }}
      >
        <View>
          <Image
            source={
              dataBus.route === "Indrapura"
                ? picIndrapura
                : dataBus.route === "Aek Kanopan"
                ? picAekKanopan
                : dataBus.route === "Aek Nabara"
                ? picAekNabara
                : dataBus.route === "Ranto prapat"
                ? picRantauPrapat
                : dataBus.route === "Kisaran"
                ? picKisaran
                : dataBus.route === "Sipiongot"
                ? picSipiongot
                : dataBus.route === "Tebing Tinggi"
                ? picTebing
                : dataBus.route === "Simangambat"
                ? picSimangambat
                : picIndrapura
            }
            style={{
              width: "100%",
              height: height / 3,
              borderRadius: width / 10,
            }}
          />
          <LinearGradient
            // Button Linear Gradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]}
            style={{
              width: "100%",
              position: "absolute",
              height: height / 3,
              borderRadius: width / 10,
              justifyContent: "flex-end",
              padding: width / 26,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={[StylesFont.boldh3, { color: "white" }]}>
                {dataBus.route}
              </Text>
              <Text style={[StylesFont.regularSmall, { color: "white" }]}>
                <Ionicons name="location" size={18} color="white" />
                {dataBus.route === "Indrapura"
                  ? "Batu Bara,Sumatera Utara"
                  : dataBus.route === "Aek Kanopan"
                  ? "Labuhan Batu Utara,Sumatera Utara"
                  : dataBus.route === "Aek Nabara"
                  ? "Labuhan Batu,Sumatera Utara"
                  : dataBus.route === "Ranto prapat"
                  ? "Labuhan Batu,Sumatera Utara"
                  : dataBus.route === "Kisaran"
                  ? "Asahan,Sumatera Utara"
                  : dataBus.route === "Sipiongot"
                  ? "Padang Lawas Utara,Sumatera Utara"
                  : dataBus.route === "Tebing Tinggi"
                  ? "Sumatera Utara"
                  : dataBus.route === "Simangambat"
                  ? "Padang Lawas Utara,Sumatera Utara"
                  : ""}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderColor: Colors.SecondaryColor,
            borderWidth: 1,
            marginVertical: 10,
            borderRadius: width / 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",

              padding: 4,
            }}
          >
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Harga
            </Text>
            <Text style={[StylesFont.mediumSmall]}>
              <Text style={[StylesFont.mediumSmall, { color: "#02b80f" }]}>
                Rp
              </Text>
              {dataBus.harga},-
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              borderRightWidth: 1,
              borderLeftWidth: 1,
              padding: 4,
              borderColor: Colors.SecondaryColor,
            }}
          >
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Tanggal
            </Text>
            <Text style={[StylesFont.mediumSmall]}>
              {dataBus.keberangkatan}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              borderRightWidth: 1,
              borderColor: Colors.SecondaryColor,
              padding: 4,
            }}
          >
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Pukul
            </Text>
            <Text style={[StylesFont.mediumSmall]}>{dataBus.waktu} WIB</Text>
          </View>
          <View
            style={{
              flexDirection: "column",

              padding: 4,
            }}
          >
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Kelas Bus
            </Text>
            <Text style={[StylesFont.mediumSmall]}>{dataBus.kelas}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: width / 6,
                backgroundColor: Colors.LightPurple,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                height: width / 6,
              }}
            >
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={38}
                color="white"
              />
            </View>
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Minuman
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: width / 6,
                backgroundColor: Colors.LightPurple,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                height: width / 6,
              }}
            >
              <MaterialIcons name="luggage" size={38} color="white" />
            </View>
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Bagasi
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: width / 6,
                backgroundColor: Colors.LightPurple,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                height: width / 6,
              }}
            >
              <MaterialCommunityIcons
                name="mirror-rectangle"
                size={38}
                color="white"
              />
            </View>
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
              Selimut
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: width / 6,
                backgroundColor: Colors.LightPurple,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                height: width / 6,
              }}
            >
              <Entypo name="air" size={38} color="white" />
            </View>
            <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>AC</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <MyButton
            title="Pesan Bus Sekarang"
            action={() =>
              navigation.navigate("BookingSeat", {
                dataBus: dataBus,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BusDetail;
