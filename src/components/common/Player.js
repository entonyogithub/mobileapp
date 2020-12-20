import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as FileSystem from "expo-file-system";
import { Audio } from "expo-av";
import { Icon } from "./";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { styles } from "../../styles";
import { COLOR_BLUE_07, COLOR_YALLOW_FB, COLOR_WHITE } from "../../config/Enum";
class Player extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.sound = null;
    this.state = {
      soundPosition: null,
      soundDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isSeeking: false,
      volume: 1.0
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this.sound != null) this.sound.unloadAsync();
    this._init(this.props.sound);
  }

  componentWillUnmount() {
    if (this.sound != null) {
      this.sound.unloadAsync();
    }
    this._isMounted = false;
  }

  _updateScreenForSoundStatus = status => {
    if (this._isMounted) {
      if (status.isLoaded) {
        this.setState({
          soundDuration: status.durationMillis,
          soundPosition: status.positionMillis,
          isPlaying: status.isPlaying
        });
      } else {
        this.setState({
          soundDuration: null,
          soundPosition: null,
          isPlaying: false
        });
        if (status.error) {
          console.log(`FATAL PLAYER ERROR: ${status.error}`);
        }
      }
    }
  };

  async _init(file) {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true
    });
    const { sound, status } = await Audio.Sound.createAsync(
      { uri: file },
      {
        isLooping: false
      },
      this._updateScreenForSoundStatus
    );
    this.sound = sound;
    this.sound.playAsync();
  }

  _onPlayPausePressed = () => {
    if (this.sound != null) {
      if (this.state.isPlaying) {
        this.sound.pauseAsync();
      } else {
        this.sound.playAsync();
      }
    }
  };
  _onStopPressed = () => {
    if (this.sound != null) {
      this.sound.stopAsync();
      this.props.onStop();
    }
  };
  _onVolumeSliderValueChange = value => {
    if (this.sound != null) {
      this.sound.setVolumeAsync(value);
    }
  };

  _onSeekSliderValueChange = value => {
    if (this.sound != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.sound.pauseAsync();
    }
  };

  _getSeekSliderPosition() {
    if (
      this.sound != null &&
      this.state.soundPosition != null &&
      this.state.soundDuration != null
    ) {
      return this.state.soundPosition / this.state.soundDuration;
    }
    return 0;
  }

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

  _getPlaybackTimestamp() {
    if (
      this.sound != null &&
      this.state.soundPosition != null &&
      this.state.soundDuration != null
    ) {
      const seconds = Math.floor(this.state.soundPosition / 1000);
      const endTime = this.props.endTime;
      if (endTime === seconds) {
        this.props.callBack();
      }
      return `${this._getMMSSFromMillis(
        this.state.soundPosition
      )} / ${this._getMMSSFromMillis(this.state.soundDuration)}`;
    }
    return "";
  }

  render() {
    return (
      <View
        style={[
          styles.flexRowSpaceBetween,
          styles.alignItemsCenter,
          styles.playerStyle
        ]}
      >
        <View style={[styles.flexRow]}>
          <TouchableOpacity
            style={styles.marginRightSmall}
            onPress={this._onPlayPausePressed}
          >
            <Icon
              size={50}
              color={COLOR_WHITE}
              IconSet={FontAwesome}
              iconName={this.state.isPlaying ? "pause-circle" : "play-circle"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onStopPressed}>
            <Icon
              size={50}
              color={COLOR_WHITE}
              IconSet={FontAwesome}
              iconName={"stop-circle"}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.fontSize16, styles.colorWhite]}>
          {this._getPlaybackTimestamp()}
        </Text>
      </View>
    );
  }
}
export { Player };
