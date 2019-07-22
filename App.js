import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#333"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFF"
  },
});

export default App;
