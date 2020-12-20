import React from "react";
import { Provider } from "react-redux";
import Router from "./src/config/Router";
import { Font, Permissions, Notifications, Updates } from "expo";
import { loadAsync } from "expo-font";
import { AsyncStorage, BackHandler, Platform, I18nManager } from "react-native";

import store from "./src/store";
import { Spinner } from "./src/components/common";
import { getUser } from "./src/actions/AuthActions";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      langauge: false
    };
  }

  componentDidMount() {
    store.dispatch(getUser());
    this._getFonts();
  }

  async _getFonts() {
    await loadAsync({
      "JF-FLAT": require("./src/assets/fonts/ArbFONTS-JF-Flat-regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  // async _registerForPushNotificationsAsync() {
  //   const { status: existingStatus } = await Permissions.getAsync(
  //     Permissions.NOTIFICATIONS
  //   );
  //   let finalStatus = existingStatus;
  //   if (existingStatus !== "granted") {
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     finalStatus = status;
  //   }
  //   if (finalStatus !== "granted") {
  //     return;
  //   }
  //   let token = await Notifications.getExpoPushTokenAsync();
  //   AsyncStorage.setItem(DEVICE_PUISH_TOKEN, token);
  // }

  render() {
    if (!this.state.fontLoaded) return <Spinner size="large" />;
    else
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
  }
}
