import React, { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item = null) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentItem(null);
  };

  const addOrUpdateItem = (title, category = "Movie", status = "Plan to Watch") => {
    if (!title.trim()) return;
  
    setWatchlist((prev) =>
      currentItem
        ? prev.map((i) =>
            i.id === currentItem.id ? { ...i, title, category, status } : i
          )
        : [...prev, { id: Date.now().toString(), title, category, status }]
    );
  
    closeModal();
  };

  const deleteItem = (id) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        modalVisible,
        currentItem,
        openModal,
        closeModal,
        addOrUpdateItem,
        deleteItem,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
