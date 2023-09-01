/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreenComponent from './src/inAppUpdate/MainScreen';

AppRegistry.registerComponent(appName, () => MainScreenComponent);
