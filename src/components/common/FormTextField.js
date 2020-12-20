import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles";
import { COLOR_GREY_BB, COLOR_BLACK_38 } from "../../config/Enum";
const FormTextField = ({
  label,
  required,
  textAlignVertical = "center",
  value,
  onChangeText,
  labelStyle,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  maxLength = null,
  containerStyle,
  editable,
  style,
  textAlign = "right",
  error
}) => {
  return (
    <View style={styles.flexStyle}>
      {label && (
        <Text style={[styles.FormlabelStyle, labelStyle]}>{label}</Text>
      )}
      <View style={[styles.FormTextFieldContainer, containerStyle]}>
        {required && <Text style={styles.starErrorStyle}>*</Text>}
        <TextInput
          editable={editable}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          textAlignVertical={textAlignVertical}
          maxLength={maxLength}
          autoCorrect={false}
          style={[styles.FormTextFieldText, styles.alignTextByLanguage, style]}
          onChangeText={onChangeText}
          value={value}
          textAlign={textAlign}
          placeholderTextColor={COLOR_BLACK_38}
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
export { FormTextField };
