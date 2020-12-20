import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import RootWithLoader from "../Layouts/RootWithLoader";
import { connect } from "react-redux";
import _ListeningItem from "./_ListeningItem";
import { CustomFlatList } from "../common";
import { styles } from "../../styles";
import {
  getListeningsFiles,
  listeningsComplete,
  logout
} from "../../actions/AuthActions";
import { Player } from "../common/Player";
class Listenings extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.state.params.logout();
        }}
      >
        <Text
          style={[
            styles.colorWhite,
            styles.fontSize16,
            styles.paddingLeftMedium
          ]}
        >
          Logout
        </Text>
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      selectedItem: null
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      logout: this.props.logout
    });
    this.props.getListeningsFiles();
  }

  _selectItem(id) {
    this.setState({ selectedItem: id });
  }

  render() {
    const { class_id, listening_duration } = this.props.user;
    return (
      <RootWithLoader>
        <View style={[styles.flexStyle, { paddingBottom: 100 }]}>
          <CustomFlatList
            style={{ paddingTop: 10 }}
            keyExtractor={(item, index) => item.id.toString()}
            data={this.props.listenings}
            onRenderItem={item => {
              return (
                <_ListeningItem
                  selectedItem={this.state.selectedItem}
                  clickAudio={(id, link) => {
                    this._selectItem(id);
                  }}
                  listening_duration={listening_duration}
                  onStop={() => {
                    this.setState({ selectedItem: null });
                  }}
                  callBack={id => {
                    this.props.listeningsComplete({
                      class_id,
                      upload_id: id
                    });
                  }}
                  item={item}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.audioSep}></View>}
            // onEndReached={() => {
            //   this.setState({ page: this.state.page + 1 }, () => {
            //     this.props.getReadings(this.state.page);
            //   });
            // }}
            // refreshing={this.props.refreshing}
            // onRefresh={() => {
            //   this.setState({ page: 0 }, () => {
            //     this.props.getReadings(0);
            //   });
            // }}
          />
        </View>
      </RootWithLoader>
    );
  }
}
const mapStateToProps = state => ({
  user: state.common.user,
  listenings: state.home.listenings
});

export default connect(mapStateToProps, {
  getListeningsFiles,
  listeningsComplete,
  logout
})(Listenings);
