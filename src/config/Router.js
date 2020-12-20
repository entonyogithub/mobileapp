import React, { Component } from "react";
import { AsyncStorage, I18nManager } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  HomeStack,
  AuthStack,
  ListeningsStack,
  defaultNavOptions,
  defaultTabNavOptions
} from "./RouterConfig";
import AuthLoading from "../components/Auth/AuthLoading";
// import { Svg } from "expo";
// const { Defs, Mask, Polygon, Path, Use,G } = Svg;
import NavigationService from "./NavigationService";
import { TabIcon } from "../components/common/TabIcon";
import { t } from "./Localization";

class Router extends Component {
  render() {
    const HomeRoutes = createStackNavigator(HomeStack, defaultNavOptions);
    const ListeningsRoutes = createStackNavigator(
      ListeningsStack,
      defaultNavOptions
    );
    const TabNavigator = createBottomTabNavigator(
      {
        Home: {
          screen: HomeRoutes,
          navigationOptions: {
            header: null,
            tabBarLabel: "Recordings",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} name={"mic"} />;
            }
          }
        },
        Listenings: {
          screen: ListeningsRoutes,
          navigationOptions: {
            header: null,
            tabBarLabel: "Listenings",
            tabBarIcon: ({ focused }) => {
              return <TabIcon focused={focused} name={"headphones"} />;
            }
          }
        }
      },
      defaultTabNavOptions
    );
    const Auth = createStackNavigator(AuthStack, defaultNavOptions);
    const Navigation = createAppContainer(
      createSwitchNavigator({
        AuthLoading: AuthLoading,
        Home: TabNavigator,
        Auth: Auth,
        AuthLoading: AuthLoading
      })
    );
    // if (!this.state.langauge) return <Spinner size="large" />;
    return (
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
export default Router;
