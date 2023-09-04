/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import FireStoreExample from './src/firebaseIntegration/firestore';

AppRegistry.registerComponent(appName, () => FireStoreExample);
