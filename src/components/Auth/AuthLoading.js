import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Spinner } from "../common/Spinner";
import { ACCESS_TOKEN } from "../../config/GlobalConfig";
import { connect } from "react-redux";

class AuthLoading extends Component {
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    this.props.navigation.navigate(userToken ? "Home" : "Login");
  };
  componentDidMount(nextProps) {
    this._bootstrapAsync();
  }
  render() {
    return <Spinner />;
  }
}
const mapStateToProps = state => ({
  user: state.common.user
});

export default connect(mapStateToProps)(AuthLoading);
