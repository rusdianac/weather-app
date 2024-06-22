import React from "react"; // Mengimpor React
import { TextInput, StyleSheet, View } from "react-native"; // Mengimpor komponen-komponen dari React Native

// Komponen CustomTextInput menerima beberapa prop untuk konfigurasi input
const CustomTextInput = ({ text, onChange, multiline = false, placeholder, numberOfLines }) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline} // Menentukan apakah input bisa multiline
      numberOfLines={numberOfLines} // Menentukan jumlah baris pada input
      style={styles.input} // Mengatur gaya input
      placeholder={placeholder} // Menampilkan placeholder pada input
      onChangeText={onChange} // Fungsi yang dijalankan saat teks berubah
      defaultValue={text} // Nilai default input
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2, // Mengatur lebar border input
    borderColor: "#DDDDDD", // Mengatur warna border input
    padding: 10, // Memberikan padding pada input
    borderRadius: 25, // Mengatur sudut input agar melengkung
    fontSize: 16, // Mengatur ukuran font input
    width: "100%", // Mengatur lebar input agar sesuai dengan container
  },
  container: {
    marginTop: 20, // Memberikan margin atas sebesar 20
    width: "100%", // Mengatur lebar container agar sesuai dengan parent
  },
});

export default CustomTextInput; // Mengekspor komponen CustomTextInput sebagai default export
