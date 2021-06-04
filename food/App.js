import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import {ThemeProvider} from 'react-native-elements';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const {Navigator, Screen} = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <ThemeProvider>
      <Navigator initialRouteName="Search">
        <Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'BusinessSearch'}}
        />
        <Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{title: 'ResultsShow'}}
        />
      </Navigator>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
