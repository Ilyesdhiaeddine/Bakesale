import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
class App extends Component {
  render() {
    return (
      <View>
        <Text>Baksale</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    fontSize: 40,
  },
});

export default App;