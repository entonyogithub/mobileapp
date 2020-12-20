import React, { Component } from "react";
import { Text, View } from "react-native";
import { OverLaySpinner } from "../common";
import { connect } from "react-redux";
import BelowStatusBar from "./BelowStatusBar";
import { styles } from "../../styles";
import Menu from "../Menu/Menu";
import { toggleSideMenu } from "../../actions/CommonActions";
import { withNavigation } from "react-navigation";
class RootWithLoader extends Component {
  render() {
    let defaultLayout;
    if (this.props.layout == "full")
      defaultLayout = (
        <BelowStatusBar style={styles.flexStyle}>
          <View style={styles.flexStyle}>
            <OverLaySpinner visible={this.props.loading} />
            {this.props.children}
          </View>
        </BelowStatusBar>
      );
    else {
      defaultLayout = (
        <View style={styles.flexStyle}>
          <OverLaySpinner visible={this.props.loading} />
          {this.props.children}
        </View>
      );
    }
    return (
      <View style={[styles.flexStyle, this.props.style]}>{defaultLayout}</View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.common.loading,
    menuFlag: state.common.menuFlag
  };
};

export default connect(mapStateToProps, { toggleSideMenu })(
  withNavigation(RootWithLoader)
);
