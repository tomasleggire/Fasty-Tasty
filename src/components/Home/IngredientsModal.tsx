import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import React from "react";

interface Props {
  modalVisible: boolean;
  setModalVisible: (x: boolean) => void;
}

export default function IngredientsModal(props: Props) {
  const { modalVisible, setModalVisible } = props;

  return (
    <View style={{ marginTop: 22 }}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hola Mundo!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Esconder Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
