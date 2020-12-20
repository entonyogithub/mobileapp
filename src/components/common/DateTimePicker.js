import React from "react";
import { Text, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { styles } from "../../styles";
import { COLOR_BLACK_38 } from "../../config/Enum";
const DateTimePicker = ({
  containerStyle,
  label,
  labelStyle,
  date,
  mode = "date",
  onDateChange,
  placeholder,
  icon,
  format,
  error,
  required,
  inputStyle,
  disabled
}) => {
  return (
    <View style={[styles.flexStyle, styles.relativePosition]}>
      {label && (
        <Text style={[styles.FormlabelStyle, labelStyle]}>{label}</Text>
      )}
      {required && <Text style={styles.starErrorStyle}>*</Text>}
      <View style={[styles.FormTextFieldContainer]}>
        <DatePicker
          disabled={disabled}
          date={date}
          mode={mode}
          iconSource={icon.source}
          placeholder={placeholder}
          format={format}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style={[styles.datePickerStyle, containerStyle]}
          onDateChange={onDateChange}
          customStyles={{
            placeholderText: {
              color: COLOR_BLACK_38
            },
            dateIcon: {
              width: icon.width,
              height: icon.height,
              position: "absolute",
              left: 0
            },
            dateInput: [styles.dateInput, inputStyle],
            dateText: styles.dateText

            // ... You can check the source to find the other keys.
          }}
        />
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
};
export { DateTimePicker };
