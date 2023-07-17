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
const width = Dimensions.get("window").width;
const BookingSeat = ({ route, navigation }) => {
  const { dataBus } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [customerData, setCustomerData] = useState("");
  // console.log(selectedSeats);

  const getUserData = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      const res = await getUser(token);
      // console.log(res.data.id);
      setCustomerData(res.data);
    });
  };
  // console.log(dataBus);


 
  const handleClickSeat = (seatNumber) => {
    // Mengecek apakah kursi sudah dipilih sebelumnya
    const isSeatSelected = selectedSeats.includes(seatNumber);

    if (isSeatSelected) {
      // Jika kursi sudah dipilih, hapus dari daftar kursi yang dipilih
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Jika kursi belum dipilih, tambahkan ke daftar kursi yang dipilih
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
    getSeatText(seatNumber);
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

  useEffect(() => {
    getUserData();
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
              <Text style={[StylesFont.mediumSmall]}>Tersedia</Text>
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
              <Text style={[StylesFont.mediumSmall]}>Tersedia</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: width / 10,
          }}
        >
          <View style={{ width: width / 2, gap: 10, paddingRight: 20 }}>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                // onPress={()=>handleClickSeat(1)}
                style={{
                  width: width / 8,
                  height: width / 8,
                  // borderWidth: 1,
                  borderRadius: 10,
                }}
              />
              <TouchableOpacity
                // onPress={()=>handleClickSeat(2)}
                style={{
                  width: width / 8,
                  height: width / 8,
                  // borderWidth: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(1)}
                style={[
                  styles.seat,
                  selectedSeats.includes(1) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(1)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(2)}
                style={[
                  styles.seat,
                  selectedSeats.includes(2) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(2)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  2
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(5)}
                style={[
                  styles.seat,
                  selectedSeats.includes(5) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(5)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(6)}
                style={[
                  styles.seat,
                  selectedSeats.includes(6) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(6)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  6
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(9)}
                style={[
                  styles.seat,
                  selectedSeats.includes(9) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(9)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  9
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(10)}
                style={[
                  styles.seat,
                  selectedSeats.includes(10) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(10)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  10
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(13)}
                style={[
                  styles.seat,
                  selectedSeats.includes(13) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(13)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  13
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(14)}
                style={[
                  styles.seat,
                  selectedSeats.includes(14) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(14)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  14
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(17)}
                style={[
                  styles.seat,
                  selectedSeats.includes(17) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(17)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  17
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(18)}
                style={[
                  styles.seat,
                  selectedSeats.includes(18) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(18)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  18
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: width / 2, gap: 10, paddingLeft: 20 }}>
            <View
              style={{
                alignItems: "flex-end",
                width: "100%",
                // borderWidth: 1,
                paddingRight: width / 14,
                height: width / 8,
              }}
            >
              <MaterialCommunityIcons name="steering" size={40} color="grey" />
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(3)}
                style={[
                  styles.seat,
                  selectedSeats.includes(3) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(3)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(4)}
                style={[
                  styles.seat,
                  selectedSeats.includes(4) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(4)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  4
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(7)}
                style={[
                  styles.seat,
                  selectedSeats.includes(7) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(7)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(8)}
                style={[
                  styles.seat,
                  selectedSeats.includes(8) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(8)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  8
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(11)}
                style={[
                  styles.seat,
                  selectedSeats.includes(11) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(11)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  11
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(12)}
                style={[
                  styles.seat,
                  selectedSeats.includes(12) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(12)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  12
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(15)}
                style={[
                  styles.seat,
                  selectedSeats.includes(15) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(15)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  15
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(16)}
                style={[
                  styles.seat,
                  selectedSeats.includes(16) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(16)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  16
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(19)}
                style={[
                  styles.seat,
                  selectedSeats.includes(19) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(19)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  19
                </Text>
              </TouchableOpacity>
              {dataBus.kelas==="Economy1"?<TouchableOpacity
                onPress={() => handleClickSeat(20)}
                style={[
                  styles.seat,
                  selectedSeats.includes(20) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(20)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  20
                </Text>
              </TouchableOpacity>:""}
              
            </View>
            {dataBus.kelas==="Economy1"?<View
              style={{
                width: "100%",
                // borderWidth: 1,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => handleClickSeat(21)}
                style={[
                  styles.seat,
                  selectedSeats.includes(21) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(21)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  21
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleClickSeat(22)}
                style={[
                  styles.seat,
                  selectedSeats.includes(22) ? styles.selectedSeat : null,
                ]}
              >
                <Text
                  style={
                    selectedSeats.includes(22)
                      ? [StylesFont.mediumh5, { color: "white" }]
                      : [StylesFont.mediumh5, { color: "grey" }]
                  }
                >
                  22
                </Text>
              </TouchableOpacity>
            </View>:""}
            
          </View>
        </View>
        {dataBus.kelas==="Economy1"?<View style={{ width: width, marginVertical: width / 10 }}>
          <View
            style={{
              width: width,
              // borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: width / 50,
            }}
          >
            <TouchableOpacity
              onPress={() => handleClickSeat(23)}
              style={[
                styles.seat,
                selectedSeats.includes(23) ? styles.selectedSeat : null,
              ]}
            >
              <Text
                style={
                  selectedSeats.includes(23)
                    ? [StylesFont.mediumh5, { color: "white" }]
                    : [StylesFont.mediumh5, { color: "grey" }]
                }
              >
                23
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClickSeat(24)}
              style={[
                styles.seat,
                selectedSeats.includes(24) ? styles.selectedSeat : null,
              ]}
            >
              <Text
                style={
                  selectedSeats.includes(24)
                    ? [StylesFont.mediumh5, { color: "white" }]
                    : [StylesFont.mediumh5, { color: "grey" }]
                }
              >
                24
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClickSeat(25)}
              style={[
                styles.seat,
                selectedSeats.includes(25) ? styles.selectedSeat : null,
              ]}
            >
              <Text
                style={
                  selectedSeats.includes(25)
                    ? [StylesFont.mediumh5, { color: "white" }]
                    : [StylesFont.mediumh5, { color: "grey" }]
                }
              >
                25
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClickSeat(26)}
              style={[
                styles.seat,
                selectedSeats.includes(26) ? styles.selectedSeat : null,
              ]}
            >
              <Text
                style={
                  selectedSeats.includes(26)
                    ? [StylesFont.mediumh5, { color: "white" }]
                    : [StylesFont.mediumh5, { color: "grey" }]
                }
              >
                26
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleClickSeat(27)}
              style={[
                styles.seat,
                selectedSeats.includes(27) ? styles.selectedSeat : null,
              ]}
            >
              <Text
                style={
                  selectedSeats.includes(27)
                    ? [StylesFont.mediumh5, { color: "white" }]
                    : [StylesFont.mediumh5, { color: "grey" }]
                }
              >
                27
              </Text>
            </TouchableOpacity>
          </View>
        </View>:""}
        
              
        <View style={{ width: width, paddingHorizontal: width / 22 }}>
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
