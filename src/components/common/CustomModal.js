import React, { Component } from "react";
import { Text, View, Modal, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles";
import { t } from "../../config/Localization";

class CustomModal extends Component {
  render() {
    const { iconImage, title, description } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#000",
              opacity: 0.3
            }}
            onPress={this.props.onModalClose}
          ></TouchableOpacity>

          <View
            style={{
              backgroundColor: "white",
              width: "80%",
              minHeight: 150,
              marginBottom: 100,
              borderRadius: 15
            }}
          >
            <View style={styles.modalHeader}></View>
            <View style={[styles.paddingBottomMedium, styles.alignItemsCenter]}>
              <Image
                source={iconImage.source}
                style={{
                  height: iconImage.height,
                  width: iconImage.width,
                  marginTop: (-1 * iconImage.height) / 2
                }}
              />
              <Text
                style={[
                  styles.fontSize16,
                  styles.paddingBottomSmall,
                  styles.fontFamilyReguler
                ]}
              >
                {title}
              </Text>
              <Text style={[styles.fontSize10, , styles.fontFamilyReguler]}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
export { CustomModal };
