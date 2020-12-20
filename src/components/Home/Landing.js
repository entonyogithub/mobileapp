import React, { Component } from "react";
import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from "@expo/vector-icons";
import { Audio } from "expo-av";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import { Icon, CustomFlatList, Button } from "../common";
import AudioRow from "./AudioRow";
import { styles } from "../../styles";
import { COLOR_WHITE, COLOR_BLUE_07 } from "../../config/Enum";
import { Player } from "../common/Player";
import { connect } from "react-redux";
import {
  getAudioFiles,
  deleteAudioFile,
  getUser,
  UploadFile,
  logout
} from "../../actions/AuthActions";
import RootWithLoader from "../Layouts/RootWithLoader";
class Landing extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: ({ state }) => (
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
    const preset = {
      android: {
        extension: ".3gp",
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_THREE_GPP,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_NB,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000
      },
      ios: {
        extension: ".caf",
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false
      }
    };
    this.recording = null;
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.state = {
      files: [],
      haveRecordingPermissions: false,
      isPlaybackAllowed: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: true,
      isRecording: false,
      fontLoaded: false,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0,
      soundUrl: null,
      selectedItem: null,
      reload: false,
      modalVisible: false
    };
    this.recordingSettings = JSON.parse(JSON.stringify(preset));
    // // UNCOMMENT THIS TO TEST maxFileSize:
    // this.recordingSettings.android['maxFileSize'] = 12000;
  }
  componentDidMount() {
    this.props.navigation.setParams({
      logout: this.props.logout
    });
    this._askForPermissions();
    this.props.getUser();
    this.props.getAudioFiles();
  }
  _askForPermissions = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  };

  async _stopRecording() {
    try {
      await this.recording.stopAndUnloadAsync();
      this.recording.setOnRecordingStatusUpdate(null);
      const filename = this.recording
        .getURI()
        .split("/")
        .pop();
      await FileSystem.moveAsync({
        from: this.recording.getURI(),
        to: FileSystem.documentDirectory + filename
      });
      this.recording = null;
      await this.props.getAudioFiles();
      this.setState({ modalVisible: false, recordingDuration: 0 });
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }

  async _pauseRecording() {
    try {
      await this.recording.pauseAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }
  _updateScreenForRecordingStatus = status => {
    if (status.canRecord) {
      this.setState({
        isRecording: status.isRecording,
        recordingDuration: status.durationMillis
      });
    } else if (status.isDoneRecording) {
      this.setState({
        isRecording: false,
        recordingDuration: status.durationMillis
      });
    }
  };

  async _StartRecording() {
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true
    });
    if (this.recording !== null) {
      await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
    } else {
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(this.recordingSettings);
      recording.setOnRecordingStatusUpdate(
        this._updateScreenForRecordingStatus
      );

      this.recording = recording;
      await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
    }
  }

  _onRecordPressed = () => {
    if (this.state.isRecording) {
      this._pauseRecording();
    } else {
      this._StartRecording();
    }
  };

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getRecordingTimestamp() {
    if (this.state.recordingDuration != null) {
      return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
    }
    return `${this._getMMSSFromMillis(0)}`;
  }

  _addLinkAndPlay(id) {
    const foundIndex = this.props.audios.findIndex(x => x.id === id);
    const link = this.props.audios[foundIndex].value;
    this.setState({
      soundUrl: link,
      isPlaying: true,
      selectedItem: this.props.audios[foundIndex].id
    });
  }

  async deleteFile(file) {
    this.props.deleteAudioFile(file);
    this.setState({ selectedItem: null });
  }

  _selectItem(id) {
    const foundIndex = this.props.audios.findIndex(x => x.id === id);
    this.setState({ selectedItem: this.props.audios[foundIndex].id });
  }
  render() {
    return (
      <RootWithLoader style={[styles.flexStyle]}>
        {this.props.uploaded && (
          <View
            style={[
              { backgroundColor: "#d4edda" },
              styles.alignItemsCenter,
              styles.justifyContentCenter,
              styles.paddingTopSmall,
              styles.paddingBottomSmall
            ]}
          >
            <Text style={[styles.fontSize18, { color: "#155724" }]}>
              File Uploaded Successfully
            </Text>
          </View>
        )}
        {this.props.errors.file && (
          <View
            style={[
              styles.BgColorRed,
              styles.alignItemsCenter,
              styles.justifyContentCenter,
              styles.paddingTopSmall,
              styles.paddingBottomSmall
            ]}
          >
            <Text style={[styles.fontSize18, styles.colorWhite]}>
              {this.props.errors.file}
            </Text>
          </View>
        )}
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={styles.reacordingModal}>
            <TouchableOpacity
              style={styles.closeModalBtn}
              onPress={() => {
                this.setState({ modalVisible: false });
              }}
            >
              <Icon
                size={30}
                color={COLOR_WHITE}
                IconSet={AntDesign}
                iconName={"closecircleo"}
              />
            </TouchableOpacity>
            <Text style={[styles.colorWhite, styles.fontSize35]}>
              {this._getRecordingTimestamp()}
            </Text>
            <TouchableOpacity
              style={[styles.recordBtn, styles.insideModalBtn]}
              onPress={this._onRecordPressed}
            >
              <Icon
                size={50}
                color={COLOR_WHITE}
                IconSet={Feather}
                iconName={this.state.isRecording ? "mic-off" : "mic"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.doneBtn]}
              onPress={() => {
                this._stopRecording();
              }}
            >
              <Icon
                size={50}
                color={COLOR_WHITE}
                IconSet={MaterialIcons}
                iconName={"done"}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.recordingContainer}>
          <View>
            <TouchableOpacity
              style={styles.recordBtn}
              onPress={() => {
                this.setState({ modalVisible: true });
              }}
            >
              <Icon
                size={60}
                color={COLOR_WHITE}
                IconSet={Feather}
                iconName={this.state.isRecording ? "mic-off" : "mic"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flexStyle}>
          <CustomFlatList
            style={{ flex: 1, paddingTop: 10 }}
            keyExtractor={(item, index) => item.id.toString()}
            data={this.props.audios}
            onRenderItem={item => {
              return (
                <AudioRow
                  selectedItem={this.state.selectedItem}
                  item={item}
                  length={this.props.audios.length}
                  onStop={() => {
                    this.setState({ selectedItem: null });
                  }}
                  clickAudio={id => {
                    this._selectItem(id);
                  }}
                  deleteItem={file => {
                    Alert.alert(
                      "Confirmation",
                      "Are you sure you want to delete this file?",
                      [
                        {
                          text: "OK",
                          onPress: () => {
                            this.deleteFile(file);
                          }
                        },
                        {
                          text: "Cancel",
                          onPress: () => {}
                        }
                      ]
                    );
                  }}
                  uploadItem={file => {
                    this.props.UploadFile(file);
                  }}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.audioSep}></View>}
            // onEndReached={() => {
            //   this.setState({ page: this.state.page + 1 }, () => {
            //     this.props.getReadings(this.state.page);
            //   });
            // }}
            refreshing={this.props.refreshing}
            onRefresh={() => {
              this.props.getAudioFiles();
            }}
          />
        </View>
      </RootWithLoader>
    );
  }
}

const mapStateToProps = state => ({
  user: state.common.user,
  audios: state.home.audios,
  uploaded: state.home.uploaded,
  errors: state.common.errors,
  refreshing: state.common.refreshing
});

export default connect(mapStateToProps, {
  getAudioFiles,
  deleteAudioFile,
  getUser,
  UploadFile,
  logout
})(Landing);
