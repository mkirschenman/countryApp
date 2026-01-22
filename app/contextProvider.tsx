import React, { createContext, ReactElement, useContext, useState } from "react";
import { View, Text } from "react-native";

export const FavoriteContext = createContext<String | undefined>(undefined);

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState<String>("NA");

  const toggleFavorites = (newFav: String) => {
    setFavorites(newFav);
  };

  return (
    <FavoriteContext.Provider value={{favorites, toggleFavorites}}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const favoritesComponent = (): ReactElement => {
  const {favorites} = useFavorites();
  return <View style={{backgroundColor: "rgba(53, 208, 63, 0.27)", padding: 10, borderRadius: 5, margin: 10}}><Text>{`Favorites: ${favorites}`}</Text></View>
}