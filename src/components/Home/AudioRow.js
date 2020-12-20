import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Player } from "../common/Player";
import { styles } from "../../styles";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Icon } from "../common";
import { COLOR_BLUE_07, COLOR_RED_FF } from "../../config/Enum";
import * as FileSystem from "expo-file-system";

export default class AudioRow extends Component {
  constructor(props) {
    super(props);
    this.state = { soundUrl: null };
  }

  _addLinkAndPlay(id, value) {
    this.setState({
      soundUrl: value
    });
    this.props.clickAudio(id);
  }

  render() {
    const { item, index } = this.props.item;
    const { modificationTime } = item;
    const number = this.props.length - index;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const date = new Date(modificationTime * 1000);
    const fullDate = date
      ? `${date.getDate() + " "}${
          months[date.getMonth()]
        } ${date.getFullYear()} ${date.getHours()}:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`
      : "";
    return (
      <View>
        {this.props.selectedItem == item.id ? (
          <View>
            <Player sound={item.uri} onStop={this.props.onStop} />
          </View>
        ) : (
          <View
            style={[
              styles.flexRowSpaceBetween,
              styles.alignItemsCenter,
              // styles.paddingTopSmall,
              // styles.paddingBottomSmall,
              { height: 60, paddingLeft: 10, paddingRight: 10 }
            ]}
          >
            <View>
              <Text
                style={[styles.fontSize22, styles.colorBlue_07]}
              >{`Audio ${number}`}</Text>
              <Text style={[styles.fontSize14, { textAlign: "left" }]}>
                {fullDate}
              </Text>
            </View>
            <View
              style={[
                styles.flexRow,
                styles.justifyContentCenter,
                styles.alignItemsCenter
              ]}
            >
              <Text
                style={[
                  styles.fontSize14,
                  styles.colorBlue_07,
                  styles.marginRightMedium
                ]}
              ></Text>
              <TouchableOpacity
                style={styles.marginRightSmall}
                onPress={() => {
                  this._addLinkAndPlay(item.id, item.uri);
                }}
              >
                <Icon
                  size={40}
                  color={COLOR_BLUE_07}
                  IconSet={FontAwesome}
                  iconName={"play-circle"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.marginRightSmall}
                onPress={() => {
                  this.props.deleteItem(item.uri);
                }}
              >
                <Icon
                  size={30}
                  color={COLOR_RED_FF}
                  IconSet={AntDesign}
                  iconName={"delete"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.uploadItem(item.uri);
                }}
              >
                <Icon
                  size={30}
                  color={COLOR_RED_FF}
                  IconSet={AntDesign}
                  iconName={"upload"}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
