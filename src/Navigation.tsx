import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';

import consoleSvg from '../assets/console.svg';
import productSvg from '../assets/product.svg';
import settingsSvg from '../assets/settings.svg';

import { ConsoleScreen } from './ConsoleScreen';
import { ProductScreen } from './screens/product/ProductScreen';
import { Settings } from './screens/settings';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#F4F4F4',
          borderTopWidth: 0,
          elevation: 0,
        },
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#F4F4F4',
          height: 120,
          borderBottomWidth: 0,
          shadowRadius: 0,
          shadowColor: 'transparent',
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
        headerTitleStyle: {
          fontSize: 34,
          lineHeight: 41,
          fontWeight: '700',
          padding: 16,
        },
      }}
    >
      <Tab.Screen
        component={ProductScreen}
        name="Product"
        options={() => ({
          tabBarIcon: ({ size, color }) => <SvgXml fill={color} height={size} width={size} xml={productSvg} />,
        })}
      />
      <Tab.Screen
        component={ConsoleScreen}
        name="Console"
        options={() => ({
          tabBarIcon: ({ size, color }) => <SvgXml fill={color} height={size} width={size} xml={consoleSvg} />,
        })}
      />
      <Tab.Screen
        component={Settings}
        name="Settings"
        options={() => ({
          tabBarIcon: ({ size, color }) => <SvgXml fill={color} height={size} width={size} xml={settingsSvg} />,
        })}
      />
    </Tab.Navigator>
  );
};
