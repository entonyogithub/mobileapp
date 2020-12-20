import React from "react";
import { fromRight } from "react-navigation-transitions";
import { COLOR_WHITE, COLOR_BLUE_07, COLOR_YALLOW_FB } from "./Enum";
import { styles } from "../styles";
import Landing from "../components/Home/Landing";
import Login from "../components/Auth/Login";
import Listenings from "../components/Listenings/Listenings";
//Home stack routes
export const HomeStack = {
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: "Recordings",
      headerBackTitle: null
    }
  }
};
export const ListeningsStack = {
  Listenings: {
    screen: Listenings,
    navigationOptions: {
      title: "Listenings",
      headerBackTitle: null
    }
  }
};
//Settings stack routes

//Find stack routes
export const AuthStack = {
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null
    }
  }
};

//Nav default settings
export const defaultNavOptions = {
  transitionConfig: () => fromRight(),
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: COLOR_BLUE_07,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0
      },
      shadowRadius: 0,
      elevation: 0
    },
    headerTintColor: COLOR_WHITE,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: {
      color: COLOR_WHITE
    }
  }
};

// //Tab navigation default settings
export const defaultTabNavOptions = {
  defaultNavigationOptions: {},
  tabBarOptions: {
    activeTintColor: COLOR_YALLOW_FB,
    inactiveTintColor: COLOR_WHITE,
    labelStyle: styles.tabLabelStyle,
    style: styles.BottomTabBar
  }
};

// export const mainNavDefault = {
//   transitionConfig: () => fromRight(),
//   headerMode: "none"
// };
