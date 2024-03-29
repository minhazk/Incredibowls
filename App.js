import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Board from './src/screens/Board';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { GameContextProvider } from './src/context/GameContext';
import { colours } from './src/styles/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerForm from './src/screens/PlayerForm';
import Search from './src/screens/Search';
import CameraScreen from './src/screens/CameraScreen';

const FormStack = createNativeStackNavigator();

const FormStackScreen = () => {
    return (
        <FormStack.Navigator>
            <FormStack.Screen name='GameForm' component={Create} />
            <FormStack.Screen name='PlayerForm' component={PlayerForm} />
        </FormStack.Navigator>
    );
};

const BoardStackScreen = () => {
    return (
        <FormStack.Navigator>
            <FormStack.Screen name='BoardScreen' component={Board} />
            <FormStack.Screen name='CameraScreen' component={CameraScreen} />
        </FormStack.Navigator>
    );
};

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <GameContextProvider>
            <NavigationContainer>
                <StatusBar style='auto' />
                <Tab.Navigator
                    initialRouteName='Home'
                    backBehavior='history'
                    screenOptions={{
                        tabBarActiveTintColor: colours.primary,
                        tabBarInactiveTintColor: 'black',
                    }}
                >
                    <Tab.Screen
                        name='Home'
                        component={Home}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => <Ionicons name='ios-home-outline' size={size} color={color} />,
                        }}
                    />
                    <Tab.Screen
                        name='Create'
                        component={FormStackScreen}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Create',
                            tabBarIcon: ({ color, size }) => <AntDesign name='plus' size={size} color={color} />,
                        }}
                    />
                    <Tab.Screen
                        name='Board'
                        component={BoardStackScreen}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Board',
                            tabBarIcon: ({ color, size }) => <Ionicons name='md-clipboard-outline' size={size} color={color} />,
                        }}
                    />
                    <Tab.Screen
                        name='Search'
                        component={Search}
                        options={{
                            tabBarLabel: 'Search',
                            tabBarIcon: ({ color, size }) => <AntDesign name='search1' size={size} color={color} />,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </GameContextProvider>
    );
};

export default App;
