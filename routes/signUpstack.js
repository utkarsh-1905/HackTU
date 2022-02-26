import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {Welcome} from '../screens/welcome'
import { SignUp } from '../screens/signup'


const screens = {
    Welcome:{
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerShown: false,
        }
    }
}


const SignUpStack = createStackNavigator(screens);


export default createAppContainer(SignUpStack);