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
import LocalizationScreen  from './src/localization/localizationExample'
import CompoundComponentScreen  from './src/compoudComponent/index'
import TypeScriptScreen  from './src/typescript/hello'
import Call_bind_apply  from './src/call_bind_apply/index'
import BootSplash  from './src/splashboot/index'
import HookForm from './src/react_hook_form/index';
import {name as appName} from './app.json';
import deeplinking from './src/deeplinking/deeplinking';
import ReactQuery from './src/reactQuery/index';
import NavigationGroup from './src/navigationGroup';
import I18Next from './src/i18n';
import i18n from './src/i18n.config';
import FlexLearning from './src/flex_learning';

AppRegistry.registerComponent(appName, () => FlexLearning);
