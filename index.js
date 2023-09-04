/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {MyMainScreen} from './src/inAppUpdate';

AppRegistry.registerComponent(appName, () => MyMainScreen);
