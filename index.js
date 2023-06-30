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
import show_image_example  from './src/image_show_example/showImage'
import mapScreen  from './src/mapexample/mapexample'
import firestore  from './src/firebaseIntegration/firestore'
import featchLocation  from './src/location_fetch_screen/fetch_location'
import formScreen  from './src/formExample/form'
import NativeModuleScreen  from './src/native_module/native_module'
import {name as appName} from './app.json';
import deeplinking from './src/deeplinking/deeplinking';

AppRegistry.registerComponent(appName, () => NativeModuleScreen);
