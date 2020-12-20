import React, { Component } from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { COLOR_YALLOW_MAIN } from "../../config/Enum";

const OverLaySpinner = ({ visible }) => {
  return (
    <Spinner cancelable={true} visible={visible} color={COLOR_YALLOW_MAIN} />
  );
};
export { OverLaySpinner };
