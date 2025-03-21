import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useWatchlist } from "../context/WatchlistContext";

const AddButton = () => {
  const { openModal } = useWatchlist();
  return (
    <TouchableOpacity style={styles.addButton} onPress={() => openModal()}>
      <Text style={styles.addButtonText}>+ Add to Watchlist</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#E50914",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddButton;
