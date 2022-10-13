import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Board from './src/screens/Board';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <StatusBar style='auto' />
            <Tab.Navigator
                initialRouteName='Home'
                backBehavior='history'
                screenOptions={{
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'black',
                    tabBarStyle: {
                        height: 55,
                        paddingBottom: 5,
                    },
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />,
                    }}
                />
                <Tab.Screen
                    name='Create'
                    component={Create}
                    options={{
                        tabBarLabel: 'Create',
                        tabBarIcon: ({ color, size }) => <AntDesign name='plus' size={size} color={color} />,
                    }}
                />
                <Tab.Screen
                    name='Board'
                    component={Board}
                    options={{
                        tabBarLabel: 'Board',
                        tabBarIcon: ({ color, size }) => <Ionicons name='md-clipboard-outline' size={size} color={color} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
