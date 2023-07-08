import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import icUndefined from "../../assets/images/icUndefined.png";
import StylesFont from "../utils/StylesFont";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import picIndrapura from "../../assets/images/indrapura.jpeg";

const BookingList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Text style={[StylesFont.boldh2, { color: "#fff" }]}>Pesanan Anda</Text>
      </View>
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={icUndefined}
          resizeMode="contain"
          style={{ width: "150%", height: "100%" }}
        />
      </View> */}
      <View style={{ gap: 5, marginTop: width / 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("OrderDetail")}
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
                source={picIndrapura}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: width / 20,
                }}
              />
            </View>
            <View style={{ width: "45%", padding: width / 28 }}>
              <Text style={[StylesFont.semiBoldh5]}>Indrapura</Text>
              <Text style={[StylesFont.regularVerySmall, { color: "grey" }]}>
                Batu Bara,Sumatera Utara
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text
                style={[
                  StylesFont.regularVerySmall,
                  { color: Colors.PrimaryColor },
                ]}
              >
                Menunggu Pembayaran
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
                Total Harga
              </Text>
              <Text style={[StylesFont.mediumSmall]}>
                <Text style={[StylesFont.mediumSmall, { color: "#02b80f" }]}>
                  Rp
                </Text>
                250.000,-
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
              <Text style={[StylesFont.mediumSmall]}>17 Juni 2023</Text>
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
              <Text style={[StylesFont.mediumSmall]}>10:00 WIB</Text>
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
              <Text style={[StylesFont.mediumSmall]}>Ekonomi</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookingList;
