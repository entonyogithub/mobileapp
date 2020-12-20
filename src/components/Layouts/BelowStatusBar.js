import React, { Component } from "react";
import { View } from "react-native";
import { styles } from "../../styles";
const BelowStatusBar = ({ style, children }) => {
  return (
    <View style={style}>
      <View style={styles.statusBar} />
      {children}
    </View>
  );
};
export default BelowStatusBar;
