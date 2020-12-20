import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../../styles";
import { COLOR_BLACK_MAIN } from "../../config/Enum";
const PhoneField = ({
  value,
  label,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  maxLength = null,
  error,
  style
}) => {
  return (
    <View style={[style]}>
      {label && <Text style={styles.FormlabelStyle}>{label}</Text>}
      <View style={[styles.PhoneFieldContainer]}>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          style={styles.CodeField}
          onChangeText={onChangeText}
          value="962"
          placeholderTextColor={COLOR_BLACK_MAIN}
          editable={false}
        />
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          maxLength={maxLength}
          autoCorrect={false}
          style={styles.PhoneField}
          onChangeText={onChangeText}
          textAlign={"right"}
          value={value}
          placeholderTextColor={COLOR_BLACK_MAIN}
          keyboardType="numeric"
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
export { PhoneField };
