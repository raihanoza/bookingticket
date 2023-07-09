import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import picIndrapura from "../../assets/images/indrapura.jpeg";
import { MaterialIcons } from "@expo/vector-icons";
import StylesFont from "../utils/StylesFont";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import axios from "axios";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const OrderConfirmation = ({ route, navigation }) => {
  const { dataBus, customerData, selectedSeats } = route.params;
  console.log(dataBus);
  console.log(customerData);
  console.log(selectedSeats);
  const handleBooking = async () => {
    let seatData = {
      customer_id: customerData.id,
      bus_id: dataBus.id,
      seats: selectedSeats,
    };
    try {
      await axios
        .post("http://192.168.100.36:8080/api/pesanyuk", seatData)
        .then(async (res) => {
          // console.log(res);
          console.log(res.data.status);
          console.log(res.status);
          console.log(res.statusText);
          if (res.data) {
            //   // await AsyncStorage.setItem("Token", res.data.data.token);
            //   Alert.alert("Berhasil", "Pendaftaran Berhasil");
            navigation.navigate("BookingList");
          } else {
            Alert.alert("Gagal", "Pemesanan Gagal");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // Menampilkan pesan kesalahan dari server
        console.log(error.response.status); // Menampilkan kode status HTTP
        console.log(error.response.headers); // Menampilkan header respons
      } else {
        console.log("Error", error.message);
      }
    }
  };
  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  }
  const getSeatText = (seatNumber) => {
    return `kursi ${seatNumber}`;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PrimaryColor }}>
      <ScrollView>
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
              Pesanan Anda
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            // height: "90%",
            flex: 1,
            borderTopLeftRadius: width / 10,
            borderTopRightRadius: width / 10,
            padding: width / 30,
          }}
        >
          <View>
            <Image
              source={picIndrapura}
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
                  <Ionicons name="location" size={18} color="white" /> Batu
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
                Total Harga
              </Text>
              <Text style={[StylesFont.mediumSmall]}>
                <Text style={[StylesFont.mediumSmall, { color: "#02b80f" }]}>
                  Rp
                </Text>
                {formatRupiah(`${selectedSeats.length * dataBus.harga}`)},-
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
                Kapasitas
              </Text>
              <Text style={[StylesFont.mediumSmall]}>{dataBus.kapasitas}</Text>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>Nama</Text>
            </View>
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>
                {customerData.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>
                Jumlah Kursi
              </Text>
            </View>
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>
                {selectedSeats.length}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>
                Kursi Yang Dipilih
              </Text>
            </View>
            <View>
              <Text style={[StylesFont.mediumh5, { color: "grey" }]}>
                {selectedSeats.map(getSeatText).join(", ")}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
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
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                AC
              </Text>
            </View>
          </View>
          <View
            style={{
              // borderWidth: 1,
              marginVertical: 10,
              paddingVertical: width / 20,
              paddingHorizontal: width / 28,
              borderRadius: 10,
              backgroundColor: Colors.LightPurple,
            }}
          >
            <Text style={[StylesFont.mediumh5]}>
              Yakin untuk Konfirmasi Pesanan ini? {"\n"}Pesanan yang telah
              dikonfirmasi tidak bisa diubah!
            </Text>
          </View>

          <View
            style={{
              marginVertical: 20,
              backgroundColor: "#fff",
              justifyContent: "flex-end",
            }}
          >
            <MyButton
              title="Konfirmasi Pemesanan"
              action={() => handleBooking()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderConfirmation;
