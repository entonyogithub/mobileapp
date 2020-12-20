import React, { Component } from "react";
import { connect } from "react-redux";
import RootWithLoader from "../Layouts/RootWithLoader";
import { Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../styles";
import { TextField, Button, LinkButton, CustomModal } from "../common";
import { t } from "../../config/Localization";
import { verifiyEmail } from "../../actions/AuthActions";
import {
  SendCode1Image,
  SendCode2Image,
  SendCode3Image,
  COLOR_GREEN_42,
  ArrowLeft,
  AlertImage
} from "../../config/Enum";
import { TouchableOpacity } from "react-native-gesture-handler";

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
      errors: []
    };
  }

  onTextChange(name, value) {
    this.setState({ [name]: value });
  }

  onSubmit() {
    const { digit1, digit2, digit3, digit4, digit5, digit6 } = this.state;
    const code = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;
    const { email } = this.props.profileInfo;
    this.props.verifiyEmail({ code, email });
  }
  render() {
    return (
      <RootWithLoader layout="full">
        <KeyboardAwareScrollView
          enableOnAndroid
          resetScrollToCoords={{ x: 0, y: 0 }}
          extraScrollHeight={50}
          enableResetScrollToCoords={true}
        >
          <View style={[styles.RootContainer, styles.paddingBottomLarge]}>
            <CustomModal
              title={t("warning")}
              description={t("readingAlert")}
              iconImage={AlertImage}
              modalVisible={this.state.modalVisible}
              onModalClose={() => {
                this.setState({ modalVisible: false });
              }}
            />
            <View>
              <View style={styles.verifyHeader}></View>
              <View style={[styles.alignItemsCenter, { marginTop: -60 }]}>
                <Image
                  source={SendCode1Image.source}
                  style={{
                    height: SendCode1Image.height,
                    width: SendCode1Image.width
                  }}
                />
                <Image
                  source={SendCode2Image.source}
                  style={[
                    styles.marginTopSmall,
                    {
                      height: SendCode2Image.height,
                      width: SendCode2Image.width
                    }
                  ]}
                />
                <Image
                  source={SendCode3Image.source}
                  style={[
                    styles.marginTopSmall,
                    {
                      height: SendCode3Image.height,
                      width: SendCode3Image.width
                    }
                  ]}
                />
              </View>
            </View>
            <View style={styles.alignItemsCenter}>
              <Text
                style={[
                  styles.fontSize22,
                  styles.colorBlack_38,
                  styles.fontFamilyReguler,
                  styles.marginTopSmall
                ]}
              >
                {t("CheckEmailNote")}
              </Text>
              <Text
                style={[
                  styles.fontSize14,
                  styles.colorBlack_38,
                  styles.fontFamilyReguler,
                  styles.marginTopSmall
                ]}
              >
                {t("CodeSentTo")}
              </Text>
              <Text
                style={[
                  styles.fontSize14,
                  styles.colorBlack_38,
                  styles.fontFamilyReguler,
                  styles.marginTopSmall
                ]}
              >
                {"Diananimat@gmail.com"}
              </Text>
              <View
                style={[
                  styles.seprater,
                  styles.marginTopMedium,
                  styles.marginBottomMedium
                ]}
              ></View>
            </View>
            <View style={{ paddingLeft: 50, paddingRight: 50 }}>
              <Text
                style={[
                  styles.fontSize14,
                  styles.colorBlack_38,
                  styles.fontFamilyReguler,
                  styles.marginTopSmall
                ]}
              >
                {t("EnterCode")}
              </Text>
              <View
                style={[styles.flexRowSpaceBetween, styles.marginTopMedium]}
              >
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit1}
                  onChangeText={value => this.onTextChange("digit1", value)}
                />
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit2}
                  onChangeText={value => this.onTextChange("digit2", value)}
                />
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit3}
                  onChangeText={value => this.onTextChange("digit3", value)}
                />
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit4}
                  onChangeText={value => this.onTextChange("digit4", value)}
                />
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit5}
                  onChangeText={value => this.onTextChange("digit5", value)}
                />
                <TextField
                  containerStyle={{ backgroundColor: null }}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={{
                    borderRadius: 5,
                    backgroundColor: COLOR_GREEN_42,
                    marginRight: 5
                  }}
                  value={this.state.digit6}
                  onChangeText={value => this.onTextChange("digit6", value)}
                />
              </View>
              {this.props.errors.code && (
                <Text
                  numberOfLines={2}
                  ellipsizeMode="middle"
                  style={styles.errorStyle}
                >
                  {this.props.errors.code}
                </Text>
              )}
              <View style={styles.marginTopLarge}>
                <TouchableOpacity onPress={this.onSubmit.bind(this)}>
                  <Image
                    source={ArrowLeft.source}
                    style={{ height: ArrowLeft.height, width: ArrowLeft.width }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </RootWithLoader>
    );
  }
}
const mapStateToProps = state => ({
  profileInfo: state.common.profileInfo,
  errors: state.common.errors
});

export default connect(mapStateToProps, { verifiyEmail })(Verify);
