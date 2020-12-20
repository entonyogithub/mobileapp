import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../actions/AuthActions";
import RootWithLoader from "../Layouts/RootWithLoader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { styles } from "../../styles";
import { FormSection, TextField, Button, LinkButton } from "../common";
import { t } from "../../config/Localization";
import { LogoImage } from "../../config/Enum";
import { ScrollView } from "react-native-gesture-handler";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: []
    };
  }

  onTextChange(name, value) {
    this.setState({ [name]: value });
  }
  onLogin() {
    //this.props.navigation.navigate("TeaserCheck");
    const { username, password } = this.state;
    this.props.loginUser({ username, password });
  }
  render() {
    return (
      <RootWithLoader layout="full">
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.flexStyle}
        >
          <ScrollView
            style={[
              styles.RootContainer,
              styles.paddingBottomLarge,
              styles.flexStyle
            ]}
          >
            <View style={[styles.alignItemsCenter, styles.paddingTopXLarge]}>
              <Image
                source={LogoImage.source}
                style={{
                  width: LogoImage.width,
                  height: LogoImage.height
                }}
              />
            </View>

            <FormSection style={[styles.paddingTopMedium]}>
              <TextField
                required
                label={"Username"}
                value={this.state.username}
                placeholder={"Username"}
                onChangeText={value => this.onTextChange("username", value)}
                error={this.props.errors.username}
              />
            </FormSection>
            <FormSection style={styles.paddingTopLarge}>
              <TextField
                required
                secureTextEntry
                label={"Password"}
                value={this.state.password}
                placeholder={"Password"}
                onChangeText={value => this.onTextChange("password", value)}
                error={this.props.errors.password}
              />
            </FormSection>
            <Button
              onPress={this.onLogin.bind(this)}
              style={[
                styles.marginTopLarge,
                styles.BgColorBlue,
                styles.fontSize20,
                styles.AlignSelfCenter,
                {
                  width: 172,
                  borderRadius: 11,
                  borderWidth: 1
                }
              ]}
              textStyle={styles.colorWhite}
            >
              {"Login"}
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </RootWithLoader>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.common.errors
});

export default connect(mapStateToProps, {
  loginUser
})(Login);
