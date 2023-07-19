import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import StylesFont from "../utils/StylesFont";
import Colors from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../apis/LoginApi";
import axios from "axios";
import { Alert } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const BookingSeat = ({ route, navigation }) => {
  const { dataBus } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [customerData, setCustomerData] = useState("");
  // console.log(selectedSeats);

  const getUserData = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      const res = await getUser(token);
      // console.log(res.data.id);
      setCustomerData(res.data);
    });
  };

  const getSeatText = (seatNumber) => {
    return `kursi ${seatNumber}`;
  };
  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  }

  const getSeats = async () => {
    try {
      const response = await axios.get(
        `http://192.168.100.36:8080/api/buses/${dataBus.id}/seats`
      );
      setSeats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Kursi sudah dipilih, hapus dari selectedSeats
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((seat) => seat !== seatNumber)
      );
    } else {
      // Kursi belum dipilih, tambahkan ke selectedSeats
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        seatNumber,
      ]);
    }
    getSeatText(seatNumber);
  };
  console.log(selectedSeats);
  useEffect(() => {
    getUserData();
    getSeats();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            width: width,
            //   height: "10%",
            padding: width / 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ width: "10%" }}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View
            style={{
              width: "90%",
              alignItems: "center",
              // justifyContent: "flex-end",
            }}
          >
            <Text
              style={[StylesFont.boldh3, { color: "black", right: width / 24 }]}
            >
              Pilih Kursi
            </Text>
          </View>
        </View>
        <View style={{ width: width, alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: width / 1.5,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="rectangle"
                size={18}
                color={Colors.PrimaryColor}
              />
              <Text style={[StylesFont.mediumSmall]}>Dipilih</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="rectangle-outline"
                size={18}
                color="black"
              />
              <Text style={[StylesFont.mediumSmall]}>Tersedia</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="rectangle" size={18} color="grey" />
              <Text style={[StylesFont.mediumSmall]}>Tidak Tersedia</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: 50,
            rowGap: 10,
            paddingHorizontal: width / 20,
            alignItems: "center",
            justifyContent: "space-around",
            flex: 1,
            marginTop: width / 10,
          }}
        >
          {seats.map((seat) => (
            <TouchableOpacity
              onPress={() => handleClickSeat(seat.seat_number)}
              key={seat.id}
              disabled={seat.status === "booked"}
              style={[
                styles.seat,
                {
                  backgroundColor:
                    seat.status === "booked"
                      ? "grey"
                      : selectedSeats.includes(seat.seat_number)
                      ? Colors.PrimaryColor
                      : "white",
                  borderWidth: seat.status === "booked" ? 0 : 1,
                },
              ]}
            >
              <Text
                style={[
                  StylesFont.mediumh5,
                  {
                    color:
                      seat.status === "booked"
                        ? "white"
                        : selectedSeats.includes(seat.seat_number)
                        ? "white"
                        : "black",
                  },
                ]}
              >
                {seat.seat_number}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1, bottom: 0, height: height / 3 }}>
          <View
            style={{
              width: width,
              paddingHorizontal: width / 22,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Kursi Yang Dipilih
              </Text>
              <Text style={[StylesFont.mediumSmall, { color: "black" }]}>
                {selectedSeats.map(getSeatText).join(", ")}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[StylesFont.mediumSmall, { color: "grey" }]}>
                Total Harga
              </Text>
              <Text style={[StylesFont.mediumSmall, { color: "black" }]}>
                {formatRupiah(`${selectedSeats.length * dataBus.harga}`)}
                <Text>,-</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              width: width,
              paddingHorizontal: width / 22,
              justifyContent: "flex-end",
              flex: 1,
              paddingVertical: width / 28,
            }}
          >
            <MyButton
              title="Lanjutkan Pemesanan"
              action={() =>
                navigation.navigate("OrderConfirmation", {
                  dataBus: dataBus,
                  customerData: customerData,
                  selectedSeats: selectedSeats,
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  seat: {
    width: width / 8,
    height: width / 8,
    borderWidth: 1,
    borderColor: Colors.PrimaryColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSeat: {
    backgroundColor: Colors.PrimaryColor,
    borderWidth: 0,
    // color: "white",
  },
});
export default BookingSeat;
