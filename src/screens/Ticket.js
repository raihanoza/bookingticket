import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import MyButton from "../components/MyButton";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Ticket = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
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
          <AntDesign name="left" size={24} color={Colors.PrimaryColor} />
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
            style={[
              StylesFont.boldh3,
              { color: Colors.PrimaryColor, right: width / 24 },
            ]}
          >
            Pesanan Anda
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          //   borderWidth: 1,
          borderTopRightRadius: width / 12,
          borderTopLeftRadius: width / 12,
          backgroundColor: Colors.PrimaryColor,
          padding: width / 20,
        }}
      >
        <View
          style={{
            // flex: 1,
            //   borderWidth: 1,
            borderTopRightRadius: width / 12,
            borderTopLeftRadius: width / 12,
            backgroundColor: Colors.White,
            // padding: width / 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderStyle: "dashed",
              padding: width / 20,
            }}
          >
            <View>
              <Text style={[StylesFont.mediumh5]}>Indrapura</Text>
              <Text style={[StylesFont.mediumSmall]}>
                Batu Bara,Sumatera Utara
              </Text>
            </View>
            <View>
              <Text style={[StylesFont.mediumh5]}>2 Kursi</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.LightPurple,
              marginTop: 10,
              borderRadius: width / 30,
              paddingVertical: 5,
              paddingHorizontal: width / 20,
              margin: width / 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>Nama</Text>
              <Text style={[StylesFont.mediumh5]}>Sipapat</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>No.Telepon</Text>
              <Text style={[StylesFont.mediumh5]}>Sipapat</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumh5]}>Alamat</Text>
              <Text style={[StylesFont.mediumh5]}>Sipapat</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginHorizontal: width / 20,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Tanggal
              </Text>
              <Text style={[StylesFont.mediumh4]}>14 Juni 2023</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Kursi
              </Text>
              <Text style={[StylesFont.mediumh4]}>A1,A2</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              marginHorizontal: width / 20,
            }}
          >
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Kelas
              </Text>
              <Text style={[StylesFont.mediumh4]}>Business</Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.LightPurple,
                marginTop: 10,
                borderRadius: width / 30,
                paddingVertical: 5,
                paddingHorizontal: width / 20,
                width: "48%",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Total Harga
              </Text>
              <Text style={[StylesFont.mediumh4]}>Rp.50.000,-</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderStyle: "dashed",
            }}
          >
            <View
              style={{
                width: 15,
                height: 18,
                borderTopRightRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
            <View
              style={{
                width: 15,
                height: 18,
                borderTopLeftRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 15,
                height: 20,
                borderBottomRightRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
            <View
              style={{
                width: 15,
                height: 20,
                borderBottomLeftRadius: 50,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: Colors.PrimaryColor,
              }}
            ></View>
          </View>
          <View style={{ padding: width / 20 }}>
            <MyButton title="Download Tiket" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ticket;
