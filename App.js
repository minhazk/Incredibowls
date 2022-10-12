import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

export default function App() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' backBehavior='history'>
                <Tab.Screen name='Home' component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
