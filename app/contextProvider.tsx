import React, { createContext, ReactElement, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

{/* File with Context Provider to keep track of favorites using context*/}

export const FavoriteContext = createContext<String | undefined>(undefined);

{/* Provide Favorites Context for the App*/}
export const FavoriteContextProvider = ({ children }) => {
  //the state values where the data is actually stored
  const [favorites, setFavorites] = useState<String>("NA");

  //used to update the favorites value
  const toggleFavorites = (newFav: String) => {
    setFavorites(newFav);
  };

  return (
    <FavoriteContext.Provider value={{favorites, toggleFavorites}}>
      {children}
    </FavoriteContext.Provider>
  );
};

//custom hook to use the favorites content (favorites and toggleFavorites)
export const useFavorites = () => {
  return useContext(FavoriteContext);
};

//shared component to display the current favorites
export const favoritesComponent = (): ReactElement => {
  const {favorites} = useFavorites();
  return <View style={styles.favorites}><Text>{`Favorites: ${favorites}`}</Text></View>
}

//styles for the favorites component
const styles = StyleSheet.create({
  favorites: {
    backgroundColor: "rgba(53, 208, 63, 0.27)",
    padding: 10,
    borderRadius: 5,
    margin: 10
  }
  
});