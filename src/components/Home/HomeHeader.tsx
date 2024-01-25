import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

export default function HomeHeader() {
  return (
    <View style={styles.headerContent}>
      <Text style={styles.title}>¿Qué tenes a mano?</Text>
      <Pressable
        style={styles.btnIngredientes}
        onPress={() => console.log("Abriendo modal")}
      >
        <Text>INGREDIENTES</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  btnIngredientes: {
    marginTop: 35,
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
