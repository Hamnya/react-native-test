import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    x: 0,
    y: 0,
  };

  _onPressTop = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({x: this.state.x - 15})
  }

  _onPressBottom = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({x: this.state.x + 15})
  }

  _onPressLeft = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({y: this.state.y - 15})
  }

  _onPressRight = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({y: this.state.y + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {top: this.state.x, left: this.state.y}]} />




          <View style = { styles.inputContainer}>
            <TouchableOpacity onPress={this._onPressLeft}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>←</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressTop}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>↑</Text>
              </View>
            </TouchableOpacity>
              <TouchableOpacity onPress={this._onPressBottom}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>↓</Text>
              </View>
            </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressRight}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>→</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    top:200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
