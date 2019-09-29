import React from 'react';
import LoginScreen from './components/LoginScreen';
import MainPage from './components/MainPage';
import ExamplePage from './components/ExamplePage';
import WorkoutCreation from './components/WorkoutCreation';
import WorkoutView from './components/WorkoutView';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainPage},
  Example: {screen: ExamplePage},
  WorkoutCreate: {screen: WorkoutCreation},
  WorkoutView:{ screen: WorkoutView}
});

const AppContainer = createAppContainer(MainNavigator);


export default function App() {
  return (
    <AppContainer/>
    );
}
