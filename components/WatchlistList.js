import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import WatchlistItem from "./WatchlistItem";
import { useWatchlist } from "../context/WatchlistContext";
import WatchlistModal from "./WatchlistModal";

const WatchlistList = () => {
  const { watchlist } = useWatchlist();

  return (
    <View style={styles.container}>
      {watchlist.length === 0 ? (
        <Text style={styles.emptyText}>No items in your watchlist. Add some!</Text>
      ) : (
        <FlatList data={watchlist} keyExtractor={(item) => item.id} renderItem={({ item }) => <WatchlistItem item={item} />} />
      )}
      <WatchlistModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  emptyText: { 
    color: "#888", 
    textAlign: "center", 
    marginTop: 20 
},
});

export default WatchlistList;
