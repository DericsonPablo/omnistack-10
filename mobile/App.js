import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import {StatusBar, YellowBox} from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
    <Routes  />
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
    </>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hello yarDERICSON!
    //   </Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontWeight: "bold",
//     backgroundColor: '#7159c1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title:{
//     fontWeight: "bold",
//     fontSize: 32,
//     color: "#FFF",
    
//   }
// });
