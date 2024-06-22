import React, { useState } from "react"; // Mengimpor React dan hook useState
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"; // Mengimpor komponen-komponen dari React Native
import CustomTextInput from "./customTextInput"; // Mengimpor komponen CustomTextInput

// Komponen WeatherSearch menerima prop searchWeather
const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState(""); // Mendefinisikan state untuk menyimpan lokasi yang diinputkan

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation} // Mengatur state location saat teks diinputkan
      />
      {/* // Mengatur tombol pencarian */}
      <TouchableOpacity style={styles.button} onPress={() => searchWeather(location)}>
        {/* // Menampilkan teks pada tombol */}
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Mengatur konten agar berada di tengah secara horizontal
    padding: 20, // Memberikan padding pada container
  },
  button: {
    marginTop: 20, // Memberikan margin atas sebesar 20
    backgroundColor: "#1E90FF", // Mengatur warna latar belakang tombol
    paddingVertical: 10, // Memberikan padding vertikal pada tombol
    paddingHorizontal: 30, // Memberikan padding horizontal pada tombol
    borderRadius: 25, // Mengatur sudut tombol agar melengkung
  },
  buttonText: {
    color: "white", // Mengatur warna teks pada tombol menjadi putih
    fontSize: 18, // Mengatur ukuran font teks pada tombol
    fontWeight: "bold", // Mengatur teks pada tombol menjadi bold
  },
});

export default WeatherSearch; // Mengekspor komponen WeatherSearch sebagai default export
