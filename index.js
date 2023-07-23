/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import FlexLearning from './src/flex_learning';

AppRegistry.registerComponent(appName, () => FlexLearning);
