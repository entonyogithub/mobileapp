import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
class Button extends Component {
  render() {
    const {
      onPress,
      style,
      textStyle,
      children,
      disabled = false
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[disabled ? styles.btnDisabledStyle : styles.btnStyle, style]}
      >
        <Text style={[styles.btnTextStyle, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export { Button };
