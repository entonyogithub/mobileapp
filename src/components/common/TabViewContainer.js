import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { styles } from "../../styles";
import { t } from "../../config/Localization";
import {
  COLOR_GREEN_08,
  COLOR_WHITE,
  DropDownIcon,
  COLOR_BLACK_00
} from "../../config/Enum";

class TabViewContainer extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      routes: []
    };
  }

  componentDidMount() {
    this.setState({ routes: this.props.routes });
  }
  render() {
    const { scenes, showIcon, barStyle, labelStyle } = this.props;
    return (
      <TabView
        style={this.props.style}
        navigationState={this.state}
        renderScene={SceneMap(scenes)}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
              <View style={[styles.flexRow, styles.alignItemsCenter]}>
                <Text
                  style={[
                    { color },
                    styles.tabViewLabel,
                    { textAlign: "center" },
                    labelStyle
                  ]}
                >
                  {route.title}
                </Text>
                {showIcon && (
                  <Image
                    source={DropDownIcon.source}
                    style={{
                      height: DropDownIcon.height,
                      width: DropDownIcon.width,
                      marginLeft: 10
                    }}
                  />
                )}
              </View>
            )}
            indicatorStyle={{ backgroundColor: "white" }}
            tabStyle={styles.tabBarTab}
            activeColor={COLOR_WHITE}
            inactiveColor={COLOR_WHITE}
            style={[styles.tabViewBarStyle, barStyle]}
          />
        )}
        inactiveColor="#000000"
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}
export { TabViewContainer };
