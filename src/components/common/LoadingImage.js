import React, { Component } from "react";
import { ImageBackground, ActivityIndicator } from "react-native";

class LoadingImage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  render() {
    const { source } = this.props;
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: source
        }}
        onLoadEnd={() => {
          this.setState({ loading: false });
        }}
        onLoadStart={() => this.setState({ loading: true })}
      >
        <ActivityIndicator animating={this.state.loading} />
      </ImageBackground>
    );
  }
}

export { LoadingImage };
