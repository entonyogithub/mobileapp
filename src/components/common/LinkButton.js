import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
class LinkButton extends Component {
  render() {
    const { onPress, style, textStyle, children } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={[styles.linkBtnStyle, style]}>
        <Text style={[styles.linkBtnTextStyle, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export { LinkButton };
