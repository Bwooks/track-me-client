import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentWillMount() {
    return fetch("http://192.168.0.18:8080")
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({
          text: result.message
        })
      })
      .catch((err) => {
        console.log("EERRR", err)
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Text>Changes you make will automatically reloaddd.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
