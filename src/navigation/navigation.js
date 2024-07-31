import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';
import {moderateScale} from 'react-native-size-matters';
import themes from '../styles/themes';
import Icon from '../component/Icons'; // Ensure correct import

const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'HomeScreen',
    label: 'Home',
    type: 'Feather', // Use string key for type
    icon: 'home',
    component: HomeScreen,
    tabBarColor: themes.colors.white,
  },
  {
    route: 'AboutScreen',
    label: 'About',
    type: 'MaterialCommunityIcons',
    icon: 'details',
    component: AboutScreen,
    tabBarColor: themes.colors.white,
  },
];

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          bottom: moderateScale(25),
          height: moderateScale(65),
          elevation: 0,
          left: moderateScale(30),
          right: moderateScale(30),
          borderRadius: moderateScale(30),
          backgroundColor: themes.colors.white,
          position: 'absolute',
        },
      }}>
      {TabArr.map((screen, index) => (
        <Tab.Screen
          name={screen.route}
          component={screen.component}
          key={index}
          options={{
            tabBarItemStyle: {
              margin: moderateScale(6),
              borderRadius: moderateScale(30),
              padding: moderateScale(6),
            },
            tabBarActiveTintColor: themes.colors.white,
            tabBarActiveBackgroundColor: '#6c5ce7',
            tabBarLabel: screen.label,
            tabBarColor: screen.tabBarColor,
            tabBarLabelStyle: {
              fontSize: themes.fontSize.smaller,
            },

            tabBarIcon: ({color, size}) => (
              <Icon
                name={screen.icon}
                size={size}
                color={color}
                type={screen.type}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
