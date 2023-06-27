/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import PermissionScreen from './src/permission_example/permission'
import DeepLinkScreen from './src/deeplinking/deeplinking'
import Router  from './src/deeplinking/router'
import animDefault  from './src/animation/animation'
import animation_intraction_manager  from './src/animation/animation_intraction_manager'
import animationLayoutAnimation  from './src/animation/animation_layout_animation'
import iffeScreen  from './src/iffe/iffe'
import Hoc_componentScreen  from './src/high_order_components/highorderComponent'
import ReduxMainScreen  from './src/redux_with_middleware/Redux_main'
import {name as appName} from './app.json';
import deeplinking from './src/deeplinking/deeplinking';

AppRegistry.registerComponent(appName, () => ReduxMainScreen);
