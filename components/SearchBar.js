import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useWatchlist } from "../context/WatchlistContext";

const SearchBar = ({ openFilterModal }) => {
  const { searchQuery, setSearchQuery } = useWatchlist();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#bbb"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.filterButton} onPress={openFilterModal}>
        <Icon name="filter" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 10 
},
  searchInput: { 
    flex: 1, 
    backgroundColor: "#222", 
    color: "#FFF", 
    padding: 10, 
    borderRadius: 5 
},
  filterButton: { 
    marginLeft: 10, 
    padding: 8, 
    backgroundColor: "#E50914", 
    borderRadius: 5 
},
});

export default SearchBar;
