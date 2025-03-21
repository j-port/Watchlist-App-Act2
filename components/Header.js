import React from "react";
import { Text, StyleSheet } from "react-native";

const Header = () => (
  <Text style={styles.header}>🎬 My Watchlist</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E50914",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Header;
