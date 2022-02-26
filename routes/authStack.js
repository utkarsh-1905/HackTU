import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {Welcome} from '../screens/welcome'
import { Login } from '../screens/login'

const screens = {
    Welcome:{
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    }
}


const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack)