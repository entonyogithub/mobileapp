import React from "react";
import { Image } from "react-native";
import { COLOR_WHITE, COLOR_YALLOW_FB } from "../../config/Enum";
import { Icon } from "./Icon";
import { Feather } from "@expo/vector-icons";

export const TabIcon = ({ name, focused }) => {
  if (focused) {
    return (
      <Icon
        size={20}
        color={COLOR_YALLOW_FB}
        IconSet={Feather}
        iconName={name}
      />
    );
  }
  return (
    <Icon size={20} color={COLOR_WHITE} IconSet={Feather} iconName={name} />
  );
};
