import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './components/login'
// import Home from '../screen/home'

const AppNavigator = createStackNavigator({
      Login: Login,
      Home:Home
  },{
      initialRouteName:"Login"
  });

  export default AppNavigator;