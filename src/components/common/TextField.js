import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles";
import {
  COLOR_GREY_BB,
  COLOR_BLACK_38,
  COLOR_BLUE_07
} from "../../config/Enum";
const TextField = ({
  label,
  required,
  textAlignVertical = "center",
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  maxLength = null,
  containerStyle,
  editable,
  style,
  error
}) => {
  return (
    <View>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <View
        style={[
          styles.TextFieldContainer,
          error && styles.errorInputStyle,
          containerStyle
        ]}
      >
        {required && <Text style={styles.starErrorStyle}>*</Text>}
        <TextInput
          editable={editable}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          textAlignVertical={textAlignVertical}
          maxLength={maxLength}
          autoCorrect={false}
          style={[styles.TextFieldText, styles.alignTextByLanguage, style]}
          onChangeText={onChangeText}
          value={value}
          textAlign={"center"}
          placeholderTextColor={COLOR_BLUE_07}
          keyboardType={keyboardType}
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
export { TextField };
