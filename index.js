/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import App from './src'; //Automatically looks for "index.js". Didn't work, says it needs to run install npm again.
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
