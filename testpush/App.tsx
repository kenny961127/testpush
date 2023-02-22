/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Dimensions, View } from 'react-native';
import CodePush from 'react-native-code-push';

function App(): JSX.Element {
  return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
}

export default CodePush(App);
