import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useWatchlist } from "../context/WatchlistContext";

const WatchlistItem = ({ item }) => {
  const { openModal, deleteItem } = useWatchlist();

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
    <View style={styles.listItem}>
      <View style={styles.textContainer}>
        <Text style={styles.listText}>
          {item.title} ({item.category})
        </Text>
        <Text style={[styles.statusText, { backgroundColor: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={() => openModal(item)}>
          <Text style={styles.buttonText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(item.id)}>
          <Text style={styles.buttonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: "#444" 
  },
  textContainer: { 
    flex: 1 
  },
  listText: { 
    color: "#FFFFFF", 
    fontSize: 16 
  },
  statusText: { 
    color: "#000", 
    fontSize: 14, 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 5, 
    overflow: "hidden", 
    marginTop: 5, 
    alignSelf: "flex-start" 
  },
  buttonContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: 5 
  },
  editButton: { 
    backgroundColor: "#FFC107", 
    width: 40, 
    height: 40, 
    borderRadius: 5, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  deleteButton: { 
    backgroundColor: "#E50914", 
    width: 40, 
    height: 40, 
    borderRadius: 5, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  buttonText: { 
    color: "#FFFFFF", 
    fontSize: 18, 
    textAlign: "center" 
  },
});

export default WatchlistItem;
