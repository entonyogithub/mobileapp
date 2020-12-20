import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
const MenuItem = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.marginBottomMedium]}>
      <Text style={[styles.menuItem, styles.fontFamilyReguler, style]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
