import React from 'react';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {BottomTabBarProps as RNBottomTabBarProps} from '@react-navigation/bottom-tabs';

export function BottomTabBar({navigation, state}: RNBottomTabBarProps) {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="HOME" />
      <BottomNavigationTab title="DETAILS" />
      <BottomNavigationTab title="TRANSACTIONS" />
    </BottomNavigation>
  );
}
