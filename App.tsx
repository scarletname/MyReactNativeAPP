/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={[styles.backgroundStyle, {height: '100%'}]}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./assets/images/picture.jpg')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{translateX: -112}, {translateY: -112}],
    },
  image: {
    width:224,
    height: 224,
  },
});

export default App;
