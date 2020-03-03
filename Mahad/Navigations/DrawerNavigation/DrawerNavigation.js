import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerNavigationContent from "./DrawerNavigationContent";
import HomeScreen from "./src/screens/HomeScreen";

const DrawerNavigation = createDrawerNavigator(
  {
    Home: HomeScreen

    // Home1: Invoice,
  },
  {
    hideStatusBar: true,
    contentComponent: DrawerNavigationContent

    // contentOptions: {
    //   activeTintColor: '#fff',
    //   activeBackgroundColor: '#6b52ae',
    // },
  }
);

export default createAppContainer(DrawerNavigation);
