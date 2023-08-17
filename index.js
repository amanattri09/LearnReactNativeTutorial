/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ReactQuery from './src/reactQuery';
import AnimationV2Screen from './src/animation/AnimationV2Screen';

AppRegistry.registerComponent(appName, () => AnimationV2Screen);
