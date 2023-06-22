/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PermissionScreen from './src/permission_example/permission'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PermissionScreen);
