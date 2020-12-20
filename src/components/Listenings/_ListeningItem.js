import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { COLOR_BLUE_07 } from "../../config/Enum";
import { styles } from "../../styles";
import { Icon } from "../common";
import { FontAwesome } from "@expo/vector-icons";
import { Player } from "../common/Player";

class _ListeningItem extends Component {
  _addLinkAndPlay(id) {
    this.props.clickAudio(id);
  }

  render() {
    const { item } = this.props.item;
    const { listening_duration } = this.props;
    return (
      <View>
        {this.props.selectedItem == item.id ? (
          <Player
            enableCallBack
            onStop={this.props.onStop}
            sound={item.file}
            endTime={listening_duration}
            callBack={() => {
              this.props.callBack(item.id);
            }}
          />
        ) : (
          <View style={{ minHeight: 60, paddingLeft: 10, paddingRight: 10 }}>
            <View
              style={[
                styles.flexRowSpaceBetween,
                styles.paddingTopSmall,
                styles.paddingBottomSmall
              ]}
            >
              <View style={{ width: "80%" }}>
                <Text
                  style={[styles.fontSize22, styles.colorBlue_07]}
                >{`${item.title}`}</Text>
                <Text style={[styles.fontSize14]}>{item.date}</Text>
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
                    this._addLinkAndPlay(item.id);
                  }}
                >
                  <Icon
                    size={40}
                    color={COLOR_BLUE_07}
                    IconSet={FontAwesome}
                    iconName={
                      this.props.selectedItem == item.id
                        ? "stop-circle"
                        : "play-circle"
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}
export default _ListeningItem;
