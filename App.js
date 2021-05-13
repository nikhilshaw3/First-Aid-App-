import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class App extends React.Component {
  render(){
return (
<AppContainer/>
);
}
}

const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
Drawer:{screen: AppDrawerNavigator},
BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);