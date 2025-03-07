import React, { useState } from "react";
import { View, FlatList, Text, Modal, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import WatchlistItem from "./components/WatchlistItem";

export default function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Movie");
  const [status, setStatus] = useState("Plan to Watch");

  const openModal = (item = null) => {
    setCurrentItem(item);
    setTitle(item ? item.title : "");
    setCategory(item ? item.category : "Movie");
    setStatus(item ? item.status : "Plan to Watch");
    setModalVisible(true);
  };

  const handleSave = () => {
    if (title.trim() === "") return;

    if (currentItem) {
      setWatchlist((prev) =>
        prev.map((i) =>
          i.id === currentItem.id ? { ...i, title, category, status } : i
        )
      );
    } else {
      setWatchlist([
        ...watchlist,
        { id: Date.now().toString(), title, category, status },
      ]);
    }

    setModalVisible(false);
    setTitle("");
    setStatus("Plan to Watch");
  };

  const handleDelete = (id) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Plan to Watch":
        return "#FFC107";
      case "Watching":
        return "#2196F3";
      case "Completed":
        return "#4CAF50";
      case "Dropped":
        return "#F44336";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎬 My Watchlist</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => openModal()}>
        <Text style={styles.addButtonText}>+ Add to Watchlist</Text>
      </TouchableOpacity>
      <ScrollView>
        <FlatList
          data={watchlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <WatchlistItem
              item={item}
              openModal={openModal}
              handleDelete={handleDelete}
              getStatusColor={getStatusColor}
            />
          )}
        />
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{currentItem ? "Edit Watchlist Item" : "Add to Watchlist"}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Movie/Series Title"
              placeholderTextColor="#bbb"
              value={title}
              onChangeText={setTitle}
            />

            {/* Category Dropdown */}
            <Picker selectedValue={category} style={styles.picker} onValueChange={setCategory}>
              <Picker.Item label="Movie" value="Movie" />
              <Picker.Item label="Series" value="Series" />
            </Picker>

            {/* Status Dropdown */}
            <Picker selectedValue={status} style={styles.picker} onValueChange={setStatus}>
              <Picker.Item label="Plan to Watch" value="Plan to Watch" />
              <Picker.Item label="Watching" value="Watching" />
              <Picker.Item label="Completed" value="Completed" />
              <Picker.Item label="Dropped" value="Dropped" />
            </Picker>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", color: "#E50914", textAlign: "center", marginBottom: 20 },
  addButton: { backgroundColor: "#E50914", padding: 12, borderRadius: 5, alignItems: "center", marginBottom: 20 },
  addButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },

  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.7)" },
  modalContent: { width: 300, padding: 20, backgroundColor: "#222", borderRadius: 10, alignItems: "center" },
  modalTitle: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF", marginBottom: 10 },
  input: { width: "100%", borderBottomWidth: 1, borderBottomColor: "#E50914", color: "#FFFFFF", marginBottom: 15, padding: 8 },
  picker: { width: "100%", backgroundColor: "#333", color: "#FFFFFF", marginBottom: 10 },

  saveButton: { backgroundColor: "#E50914", padding: 10, borderRadius: 5, width: "100%", alignItems: "center", marginTop: 10 },
  saveButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  cancelButton: { backgroundColor: "#555", padding: 10, borderRadius: 5, width: "100%", alignItems: "center", marginTop: 5 },
  cancelButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});
