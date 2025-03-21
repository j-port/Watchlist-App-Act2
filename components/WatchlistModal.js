import React, { useState, useEffect } from "react";
import { View, Modal, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useWatchlist } from "../context/WatchlistContext";

const WatchlistModal = () => {
  const { modalVisible, closeModal, currentItem, addOrUpdateItem } = useWatchlist();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Movie");
  const [status, setStatus] = useState("Plan to Watch");

  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.title);
      setCategory(currentItem.category);
      setStatus(currentItem.status);
    } else {
      setTitle("");
      setCategory("Movie");
      setStatus("Plan to Watch");
    }
  }, [currentItem, modalVisible]);

  return (
    <Modal visible={modalVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{currentItem ? "Edit" : "Add"} Watchlist Item</Text>

          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter Title"
            placeholderTextColor="#999"
          />

          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={[styles.categoryButton, category === "Movie" && styles.selectedCategory]}
              onPress={() => setCategory("Movie")}
            >
              <Text style={styles.categoryText}>Movie</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryButton, category === "Series" && styles.selectedCategory]}
              onPress={() => setCategory("Series")}
            >
              <Text style={styles.categoryText}>Series</Text>
            </TouchableOpacity>
          </View>

          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={styles.picker}
            dropdownIconColor="#E50914"
          >
            <Picker.Item label="Plan to Watch" value="Plan to Watch" />
            <Picker.Item label="Watching" value="Watching" />
            <Picker.Item label="Completed" value="Completed" />
            <Picker.Item label="Dropped" value="Dropped" />
          </Picker>

          <TouchableOpacity
            style={[styles.actionButton, styles.saveButton]}
            onPress={() => addOrUpdateItem(title, category, status)}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, styles.cancelButton]}
            onPress={closeModal}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#333",
    color: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 15,
  },
  categoryButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#E50914",
    borderRadius: 5,
    alignItems: "center",
  },
  selectedCategory: {
    backgroundColor: "#E50914",
  },
  categoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  picker: {
    width: "100%",
    height: 50,
    color: "#fff",
    backgroundColor: "#333",
    marginBottom: 15,
  },
  actionButton: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#E50914",
  },
  cancelButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WatchlistModal;
