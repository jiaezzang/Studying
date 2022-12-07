import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

class WeatherProject extends Component {
  constructor (props) {
    super(props);
    this.state = { zip:"", forecast: null };
  }

  _handleTextChange = event => {
    this.setState({ zip: event.nativeEvent.text });
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.welcome}>
          you input {this.state.zip}.
        </Text>
        <TextInput 
          style={StyleSheet.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  }
});

export default WeatherProject;