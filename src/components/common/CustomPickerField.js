import React, { Component } from "react";
import { Text, View, Image, TextInput } from "react-native";
import { CustomPicker } from "react-native-custom-picker";
import { styles } from "../../styles";

class CustomPickerField extends Component {
  //Render the picker field template
  renderHeader() {
    const { headerLabel, headerColor } = this.props;
    return (
      <View
        style={[styles.customPickerHeader, { backgroundColor: headerColor }]}
      >
        <Text style={styles.customPickerHeaderText}>{headerLabel}</Text>
      </View>
    );
  }

  //Render the picker field template
  renderField(settings) {
    const {
      containerStyle,
      defaultText,
      error,
      label,
      icon,
      selectedItemStyle,
      required
    } = this.props;
    const { selectedItem, getLabel } = settings;
    return (
      <View>
        <View style={[styles.pickerContainer, containerStyle]}>
          {required && <Text style={styles.starErrorStyle}>*</Text>}
          <View style={styles.pickerInnerContainer}>
            <View style={{ width: "100%" }}>
              <Text
                numberOfLines={1}
                style={[styles.pickerSelectedItem, selectedItemStyle]}
              >
                {!selectedItem ? (
                  <Text style={[styles.fontSize12, styles.fontFamilyReguler]}>
                    {defaultText}
                  </Text>
                ) : (
                  <Text style={[styles.fontSize12, styles.fontFamilyReguler]}>
                    {getLabel(selectedItem)}
                  </Text>
                )}
              </Text>
            </View>
            <Image
              style={{
                width: icon.width,
                height: icon.height,
                position: "absolute",
                left: 0
              }}
              source={icon.source}
            />
          </View>
        </View>
        {error && (
          <Text
            numberOfLines={2}
            ellipsizeMode="middle"
            style={styles.errorStyle}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }

  //Option custom template
  renderOption(settings) {
    const { item, getLabel } = settings;
    return (
      <View style={styles.optionContainer}>
        <Text style={[styles.optionText]}>{getLabel(item)}</Text>
      </View>
    );
  }

  render() {
    const { options, value, label } = this.props;
    return (
      <View style={[styles.flexStyle]}>
        {label && <Text style={styles.FormlabelStyle}>{label}</Text>}
        <CustomPicker
          value={value}
          modalStyle={styles.modalStyle}
          options={options}
          getLabel={item => item.label.toUpperCase()}
          fieldTemplate={this.renderField.bind(this)}
          headerTemplate={this.renderHeader.bind(this)}
          optionTemplate={this.renderOption}
          onValueChange={this.props.onValueChange}
        />
      </View>
    );
  }
}
export { CustomPickerField };
