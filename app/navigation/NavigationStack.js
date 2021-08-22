import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import screens from './screens';
import Register from 'app/screens/Register';
import TaskCreate from 'app/screens/TaskCreate';
import { Button, FAB, Text } from 'react-native-paper';
import Searchbar from 'app/components/Searchbar';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    // fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

const AuthNavigator = () => {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name={screens.LOGIN}
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
      <Stack.Screen
        name={screens.REGISTER}
        component={Register}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>
    <Stack.Screen
      name={screens.HOME}
      component={Home}
      headerShown={false}
      options={{ ...homeOptions }}
    />
    <Stack.Screen
      name={screens.TASK_CREATE}
      component={TaskCreate}
      options={{ ...homeOptions, title: 'Tambah Task' }}
    />
    <Stack.Screen
      name={screens.TASK_UPDATE}
      component={TaskCreate}
      options={{ ...homeOptions, title: 'Ubah Task' }}
    />
  </LoggedInStack.Navigator>
);

const App = props => {
  const { theme } = props;
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator headerMode="none">
        {isLoggedIn ? (
          <Stack.Screen
            name={screens.HOME}
            component={LoggedInNavigator}
            options={homeOptions}
          />
        ) : (
          <Stack.Screen
            name={screens.LOGIN}
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
