/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ReactQuery from './src/reactQuery';

AppRegistry.registerComponent(appName, () => ReactQuery);
