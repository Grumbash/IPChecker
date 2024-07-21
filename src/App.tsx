import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {QueryClientProvider} from '@tanstack/react-query';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {Details, Home, Transactions} from './screens';
import {queryClient} from './api';
import {BottomTabBar, RootTabsParamList} from './navigation';

const Tab = createBottomTabNavigator<RootTabsParamList>();

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" tabBar={BottomTabBar}>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{title: 'Dashboard'}}
              />
              <Tab.Screen name="Details" component={Details} />
              <Tab.Screen name="Transactions" component={Transactions} />
            </Tab.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
