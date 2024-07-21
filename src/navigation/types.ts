import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ImageSourcePropType} from 'react-native';

export type RootTabsParamList = {
  Home: undefined;
  Details: {ip?: string; image?: ImageSourcePropType};
  Transactions: undefined;
};

export type DetailsScreenNavigationProps = BottomTabNavigationProp<
  RootTabsParamList,
  'Details'
>;
