import React, { Component } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { styles } from "../../styles";
import RootWithLoader from "../Layouts/RootWithLoader";
import { t } from "../../config/Localization";
import { Button } from "./index";
import { COLOR_PURPLE_CE, COLOR_BLACK_00 } from "../../config/Enum";

class Confirmation extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "Thank \n You Lina");
    const message = navigation.getParam(
      "message",
      "We will notify you once your question has been answered"
    );
    const color = navigation.getParam("color", COLOR_PURPLE_CE);
    const route = navigation.getParam("route", "Home");
    const textColor = navigation.getParam("textColor", COLOR_BLACK_00);
    return (
      <RootWithLoader
        layout="full"
        style={[styles.RootNoBorderContainer, styles.colorWhite]}
      >
        <View
          style={[styles.confirmationContainer, { backgroundColor: color }]}
        >
          <Text style={[styles.confirmationTitle, { color: textColor }]}>
            {title}
          </Text>
          <View style={[styles.seprateLine, { backgroundColor: textColor }]} />
          <Text style={[styles.confirmationMessage, { color: textColor }]}>
            {message}
          </Text>
          <Button
            style={[styles.marginTopLarge]}
            textStyle={{ color: color }}
            onPress={() => {
              this.props.navigation.navigate(route);
            }}
          >
            {t("next")}
          </Button>
        </View>
      </RootWithLoader>
    );
  }
}
export default Confirmation;
