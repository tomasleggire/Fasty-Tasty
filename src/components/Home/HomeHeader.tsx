import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  openModal: () => void;
}

export default function HomeHeader(props: Props) {
  const { openModal } = props;

  return (
    <View style={styles.headerContent}>
      <Text style={styles.title}>¿Qué tenes a mano?</Text>
      <Pressable style={styles.btnIngredientes} onPress={openModal}>
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
    marginTop: 30,
    backgroundColor: "pink",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
});
