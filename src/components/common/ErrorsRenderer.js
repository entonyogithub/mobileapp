import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles";
const ErrorsRenderer = ({ errors }) => {
  let message;
  if (errors.length > 0)
    message = errors.map(error => {
      return `${error} \n`;
    });
  return (
    <View>
      <Text style={styles.errorStyle}> {message} </Text>
    </View>
  );
};
export { ErrorsRenderer };
