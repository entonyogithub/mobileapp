import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Text,
  View,
  I18nManager,
  AsyncStorage,
  ScrollView,
  Alert,
  Linking,
  Image
} from "react-native";
import { Updates } from "expo";
import { styles } from "../../styles";
import { Button } from "../common";
import MenuItem from "./MenuItem";
import { t } from "../../config/Localization";
import { logout } from "../../actions/AuthActions";
import { TouchableOpacity } from "react-native-gesture-handler";
class Menu extends Component {
  render() {
    const { user } = this.props;
    return (
      <ScrollView style={[styles.BgColorGreen08]}>
        <View style={[styles.menuContainer]}>
          <View style={[styles.alignItemsCenter, styles.paddingTopLarge]}>
            <Text
              style={[
                styles.colorBlue,
                styles.fontSize16,
                styles.fontFamilyReguler,
                styles.colorWhite,
                styles.marginTopSmall
              ]}
            >
              {user.name}
            </Text>
            <View
              style={[
                styles.seprater,
                styles.marginTopMedium,
                styles.marginBottomLarge
              ]}
            ></View>
          </View>

          <View>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("Home");
              }}
            >
              {t("Home")}
            </MenuItem>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("Readings");
              }}
            >
              {t("MyReadings")}
            </MenuItem>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("Medicines");
              }}
            >
              {t("medicinesAndAlerts")}
            </MenuItem>
          </View>
          <View>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("EditMedicalProfile");
              }}
            >
              {" "}
              {t("MedicalProfile")}
            </MenuItem>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("Notifications");
              }}
            >
              {t("Notifications")}
            </MenuItem>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.navigator.navigate("About");
              }}
            >
              {t("AboutTheApp")}
            </MenuItem>
            <MenuItem
              onPress={() => {
                this.props.toggleSideMenu(false);
                this.props.logout();
              }}
            >
              {t("Logout")}
            </MenuItem>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  user: state.common.user
});

export default connect(mapStateToProps, { logout })(Menu);
