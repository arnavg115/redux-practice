import React from 'react';
import Counter from './src/counter';
import { View } from "react-native";
import { store } from "./src/store/store"
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store = {store}>
      <Counter/>
    </Provider>
  );
}

