import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import WatchlistList from "./components/WatchlistList";
import WatchlistModal from "./components/WatchlistModal";
import { WatchlistProvider } from "./context/WatchlistContext";
import SearchBar from "./components/SearchBar";
import FilterModal from "./components/FilterModal";
import AddButton from "./components/AddButton";
import Header from "./components/Header";

export default function App() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <WatchlistProvider>
      <View style={styles.container}>
        <Header />
        <SearchBar openFilterModal={() => setFilterModalVisible(true)} />
        <WatchlistList />
        <AddButton />
        <WatchlistModal />
        <FilterModal visible={filterModalVisible} closeModal={() => setFilterModalVisible(false)} />
      </View>
    </WatchlistProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#141414", 
    padding: 20 
  },
});
