import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Money from './pages/Money';
import Loja from './pages/Loja/store';

import CustomTabBar from './pages/Home/components/CustomTabBar';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#ecf0f1',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          tabBarIcon: 'comments-o',
        }}
      />
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          tabBarIcon: 'trash',
        }}
      />
    </Tab.Navigator>
  );
}
