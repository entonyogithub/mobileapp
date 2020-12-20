import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { styles } from "../../styles";
import { toggleSideMenu } from "../../actions/CommonActions";
class MenuButtonContainer extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      toggleSideMenu: this.props.toggleSideMenu.bind(this),
      flag: this.props.flag
    });
  }

  render() {
    const { menuBtn, navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.state.params.toggleSideMenu(!navigation.state.params.flag);
        }}
        style={styles.marginRightMedium}
      >
        <Image
          source={menuBtn.source}
          style={{ height: menuBtn.height, width: menuBtn.width }}
        />
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = state => ({
  flag: state.common.menuFlag
});

const MenuButton = connect(mapStateToProps, { toggleSideMenu })(
  MenuButtonContainer
);

export { MenuButton };
