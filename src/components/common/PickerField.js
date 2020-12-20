import React, { Component } from "react";
import { Picker } from "react-native";

class PickerField extends Component {
  render() {
    const { options, selectedValue, onValueChange } = this.props;
    return (
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map((option, idx) => {
          return (
            <Picker.Item key={idx} label={option.label} value={option.value} />
          );
        })}
      </Picker>
    );
  }
}
export { PickerField };
