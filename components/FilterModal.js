import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useWatchlist } from "../context/WatchlistContext";

const FilterModal = ({ visible, closeModal }) => {
  const {
    filterCategory,
    setFilterCategory,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
  } = useWatchlist();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Sort & Filter</Text>

          <Text style={styles.label}>Sort By:</Text>
          <Picker selectedValue={sortBy} onValueChange={setSortBy} style={styles.picker}>
            <Picker.Item label="Title" value="Title" />
            <Picker.Item label="Category" value="Category" />
            <Picker.Item label="Status" value="Status" />
          </Picker>

          <Text style={styles.label}>Category:</Text>
          <Picker selectedValue={filterCategory} onValueChange={setFilterCategory} style={styles.picker}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Movies" value="Movie" />
            <Picker.Item label="Series" value="Series" />
          </Picker>

          <Text style={styles.label}>Status:</Text>
          <Picker selectedValue={filterStatus} onValueChange={setFilterStatus} style={styles.picker}>
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Plan to Watch" value="Plan to Watch" />
            <Picker.Item label="Watching" value="Watching" />
            <Picker.Item label="Completed" value="Completed" />
            <Picker.Item label="Dropped" value="Dropped" />
          </Picker>

          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "rgba(0,0,0,0.5)" 
},
  modalContainer: { 
    backgroundColor: "#222", 
    padding: 20, 
    borderRadius: 10, 
    width: "80%" 
},
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#FFF", 
    textAlign: "center", 
    marginBottom: 10 },
  label: { 
    color: "#FFF", 
    marginTop: 10 
},
  picker: { 
    backgroundColor: "#333", 
    color: "#FFF" 
},
  closeButton: { 
    backgroundColor: "#E50914", 
    padding: 12, 
    borderRadius: 5, 
    alignItems: "center", 
    marginTop: 20 
},
  closeButtonText: { 
    color: "#FFFFFF", 
    fontWeight: "bold", 
    fontSize: 16 
},
});

export default FilterModal;
