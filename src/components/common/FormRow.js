import React, { Component } from "react";
import { View } from "react-native";
import { styles } from "../../styles";

class FormRow extends Component {
  render() {
    const { style } = this.props;
    return <View style={[styles.FormRow, style]}>{this.props.children}</View>;
  }
}
export { FormRow };
