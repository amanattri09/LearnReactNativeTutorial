/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import FlexLearning from './src/flex_learning';
import ModelExample from './src/modal';
import ReactQuery from './src/reactQuery';

AppRegistry.registerComponent(appName, () => ReactQuery);
