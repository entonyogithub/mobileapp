import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles";
import { COLOR_GREY_BB } from "../../config/Enum";
const TextAreaField = ({
  value,
  onChangeText,
  placeholder,
  numberOfLines = 8,
  secureTextEntry = false,
  keyboardType = "default",
  maxLength = null,
  style,
  required,
  error
}) => {
  return (
    <View style={styles.flexStyle}>
      <View
        style={[styles.TextFieldAreaContainer, error && styles.errorInputStyle]}
      >
        {required && <Text style={styles.starErrorStyle}>*</Text>}
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          maxLength={maxLength}
          autoCorrect={false}
          style={[styles.TextAreaField, style]}
          multiline={true}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          textAlignVertical="top"
          value={value}
          placeholderTextColor={COLOR_GREY_BB}
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
export { TextAreaField };
