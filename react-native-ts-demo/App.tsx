import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements';

import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

export type RootStackParamList = {
  Index: undefined;
  Show: {id: string};
  Edit: {id: string};
  Create: undefined;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <ThemeProvider>
          <Navigator initialRouteName="Index">
            <Screen
              name="Index"
              component={IndexScreen}
              options={navigation => {
                // console.log(navigation);

                return {
                  title: 'Blogs',
                };
              }}
            />
            <Screen name="Show" component={ShowScreen} />
            <Screen name="Create" component={CreateScreen} />
            <Screen name="Edit" component={EditScreen} />
          </Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
