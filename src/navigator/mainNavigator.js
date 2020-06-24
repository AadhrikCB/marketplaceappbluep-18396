import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
