import React from "react";
import { Text, Switch, View } from "react-native";
import { styles } from "../../styles";
import {
  COLOR_YALLOW_MAIN,
  COLOR_WHITE,
  COLOR_DISABLED,
  COLOR_GREEN_08
} from "../../config/Enum";
const SwitchField = ({ value, onValueChange, label, error }) => {
  return (
    <View>
      <View style={[styles.SwitchFieldContainer]}>
        <Text
          style={[
            styles.fontSize10,
            styles.fontFamilyReguler,
            styles.colorBlack_38
          ]}
        >
          {label}
        </Text>
        <Switch
          style={{ height: 30 }}
          thumbColor={COLOR_WHITE}
          trackColor={{ true: COLOR_GREEN_08, false: COLOR_DISABLED }}
          value={value}
          onValueChange={onValueChange}
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
export { SwitchField };
