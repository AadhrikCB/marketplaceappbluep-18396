import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2971032Navigator from '../features/BlankScreen2971032/navigator';
import BlankScreen3071031Navigator from '../features/BlankScreen3071031/navigator';
import BlankScreen3171030Navigator from '../features/BlankScreen3171030/navigator';
import BlankScreen3271029Navigator from '../features/BlankScreen3271029/navigator';
import BlankScreen3371028Navigator from '../features/BlankScreen3371028/navigator';
import BlankScreen3471027Navigator from '../features/BlankScreen3471027/navigator';
import BlankScreen3571026Navigator from '../features/BlankScreen3571026/navigator';
import BlankScreen3671025Navigator from '../features/BlankScreen3671025/navigator';
import BlankScreen3771024Navigator from '../features/BlankScreen3771024/navigator';
import BlankScreen2571023Navigator from '../features/BlankScreen2571023/navigator';
import BlankScreen2371022Navigator from '../features/BlankScreen2371022/navigator';
import BlankScreen2471021Navigator from '../features/BlankScreen2471021/navigator';
import BlankScreen1671014Navigator from '../features/BlankScreen1671014/navigator';
import BlankScreen1771013Navigator from '../features/BlankScreen1771013/navigator';
import BlankScreen1871012Navigator from '../features/BlankScreen1871012/navigator';
import BlankScreen1971011Navigator from '../features/BlankScreen1971011/navigator';
import BlankScreen2071010Navigator from '../features/BlankScreen2071010/navigator';
import BlankScreen2171009Navigator from '../features/BlankScreen2171009/navigator';
import BlankScreen2271008Navigator from '../features/BlankScreen2271008/navigator';
import BlankScreen1471007Navigator from '../features/BlankScreen1471007/navigator';
import BlankScreen1571006Navigator from '../features/BlankScreen1571006/navigator';
import BlankScreen1071005Navigator from '../features/BlankScreen1071005/navigator';
import BlankScreen1171004Navigator from '../features/BlankScreen1171004/navigator';
import SignIn21271003Navigator from '../features/SignIn21271003/navigator';
import SignUp11371002Navigator from '../features/SignUp11371002/navigator';
import BlankScreen971001Navigator from '../features/BlankScreen971001/navigator';
import BlankScreen770988Navigator from '../features/BlankScreen770988/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen2971032: { screen: BlankScreen2971032Navigator },
BlankScreen3071031: { screen: BlankScreen3071031Navigator },
BlankScreen3171030: { screen: BlankScreen3171030Navigator },
BlankScreen3271029: { screen: BlankScreen3271029Navigator },
BlankScreen3371028: { screen: BlankScreen3371028Navigator },
BlankScreen3471027: { screen: BlankScreen3471027Navigator },
BlankScreen3571026: { screen: BlankScreen3571026Navigator },
BlankScreen3671025: { screen: BlankScreen3671025Navigator },
BlankScreen3771024: { screen: BlankScreen3771024Navigator },
BlankScreen2571023: { screen: BlankScreen2571023Navigator },
BlankScreen2371022: { screen: BlankScreen2371022Navigator },
BlankScreen2471021: { screen: BlankScreen2471021Navigator },
BlankScreen1671014: { screen: BlankScreen1671014Navigator },
BlankScreen1771013: { screen: BlankScreen1771013Navigator },
BlankScreen1871012: { screen: BlankScreen1871012Navigator },
BlankScreen1971011: { screen: BlankScreen1971011Navigator },
BlankScreen2071010: { screen: BlankScreen2071010Navigator },
BlankScreen2171009: { screen: BlankScreen2171009Navigator },
BlankScreen2271008: { screen: BlankScreen2271008Navigator },
BlankScreen1471007: { screen: BlankScreen1471007Navigator },
BlankScreen1571006: { screen: BlankScreen1571006Navigator },
BlankScreen1071005: { screen: BlankScreen1071005Navigator },
BlankScreen1171004: { screen: BlankScreen1171004Navigator },
SignIn21271003: { screen: SignIn21271003Navigator },
SignUp11371002: { screen: SignUp11371002Navigator },
BlankScreen971001: { screen: BlankScreen971001Navigator },
BlankScreen770988: { screen: BlankScreen770988Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
