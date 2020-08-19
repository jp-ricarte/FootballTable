import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View styles={styles.titulo}>
        <Text style={styles.texto}>FutebolApp by João Pedro Ricarte</Text>
      </View>
      <Text style={styles.title}>Escolha o campeonato:</Text>
      <Button
        title="Brasileirão Série A"
        onPress={() => navigation.navigate("Brasileirão")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  texto: {
    fontWeight: 600,
  },
  title: {
    marginTop: 100,
  },
  titulo: {
    backgroundColor: "#fff",
  },
});
