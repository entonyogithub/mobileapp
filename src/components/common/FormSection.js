import React, { Component } from "react";
import { View } from "react-native";
import { styles } from "../../styles";

class FormSection extends Component {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.FormSection, style]}>{this.props.children}</View>
    );
  }
}
export { FormSection };
