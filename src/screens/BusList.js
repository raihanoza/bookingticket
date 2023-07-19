import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import icUndefined from "../../assets/images/icUndefined.png";
import StylesFont from "../utils/StylesFont";

import picIndrapura from "../../assets/images/indrapura.jpeg";
import { AntDesign } from "@expo/vector-icons";
import picAekKanopan from "../../assets/images/aekkanopan.jpg";
import picAekNabara from "../../assets/images/AekNabara.jpg";
import picKisaran from "../../assets/images/Kisaran.jpg";
import picRantauPrapat from "../../assets/images/RantauPrapat.jpg";
import picTebing from "../../assets/images/Tebingtinggi.jpg";
import picSimangambat from "../../assets/images/Simangambat.jpg";
import picSipiongot from "../../assets/images/sipiongot.jpg";
import picBus from "../../assets/images/bus.png";
import axios from "axios";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const BusList = ({ route, navigation }) => {
  const { kelas, tujuan, formattedDate, keberangkatans } = route.params;
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {};

        if (kelas) {
          requestData.kelas = kelas;
        }
        if (tujuan) {
          requestData.route = tujuan;
        }
        if (formattedDate) {
          requestData.keberangkatan = formattedDate;
        }
        if (keberangkatans) {
          requestData.keberangkatan = keberangkatans;
        }
        const response = await axios.post(
          "http://192.168.100.36:8080/api/bus/search",
          requestData
        );
        setSearchResults(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(formattedDate);
  console.log(tujuan);
  console.log(kelas);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height / 9,
            borderBottomLeftRadius: width / 15,
            borderBottomRightRadius: width / 15,
            // borderWidth: 1,
            backgroundColor: Colors.PrimaryColor,
            flexDirection: "row",
            alignItems: "center",
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
              List Bus
            </Text>
          </View>
        </View>
        {searchResults != "" ? (
          <View
            style={{
              gap: 10,
              marginVertical: width / 20,
              paddingHorizontal: width / 22,
            }}
          >
            {searchResults.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("BusDetail", { id: item.id })
                  }
                  style={{
                    height: height / 5,
                    backgroundColor: Colors.grey,
                    borderColor: Colors.SecondaryColor,
                    borderWidth: 1,
                    borderRadius: width / 20,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      borderBottomWidth: 1,
                      paddingHorizontal: width / 26,
                      height: "60%",
                      // borderColor: Colors.SecondaryColor,
                      borderBottomColor: Colors.SecondaryColor,
                      flexDirection: "row",
                      paddingVertical: width / 36,
                    }}
                  >
                    <View style={{ width: "30%" }}>
                      <Image
                        source={
                          item.route === "Indrapura"
                            ? picIndrapura
                            : item.route === "Aek Kanopan"
                            ? picAekKanopan
                            : item.route === "Aek Nabara"
                            ? picAekNabara
                            : item.route === "Ranto prapat"
                            ? picRantauPrapat
                            : item.route === "Kisaran"
                            ? picKisaran
                            : item.route === "Sipiongot"
                            ? picSipiongot
                            : item.route === "Tebing Tinggi"
                            ? picTebing
                            : item.route === "Simangambat"
                            ? picSimangambat
                            : ""
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: width / 20,
                        }}
                      />
                    </View>
                    <View style={{ width: "70%", padding: width / 28 }}>
                      <Text style={[StylesFont.semiBoldh5]}>{item.route}</Text>
                      <Text
                        style={[StylesFont.regularVerySmall, { color: "grey" }]}
                      >
                        {item.route === "Indrapura"
                          ? "Batu Bara,Sumatera Utara"
                          : item.route === "Aek Kanopan"
                          ? "Labuhan Batu Utara,Sumatera Utara"
                          : item.route === "Aek Nabara"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Ranto prapat"
                          ? "Labuhan Batu,Sumatera Utara"
                          : item.route === "Kisaran"
                          ? "Asahan,Sumatera Utara"
                          : item.route === "Sipiongot"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : item.route === "Tebing Tinggi"
                          ? "Sumatera Utara"
                          : item.route === "Simangambat"
                          ? "Padang Lawas Utara,Sumatera Utara"
                          : ""}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Harga
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        <Text
                          style={[StylesFont.mediumSmall, { color: "#02b80f" }]}
                        >
                          Rp
                        </Text>
                        {item.harga},-
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Tanggal
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.keberangkatan}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Pukul
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>
                        {item.waktu} WIB
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: Colors.LightPurple,
                        padding: 4,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                        Kelas Bus
                      </Text>
                      <Text style={[StylesFont.mediumSmall]}>{item.kelas}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View
            style={{
              height: height / 1.5,
              // flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ width: width / 2, height: height / 8 }}>
              <Image
                source={picBus}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text style={[StylesFont.boldh3, { color: Colors.PrimaryColor }]}>
              Tidak ada bus yang sesuai nih!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusList;
