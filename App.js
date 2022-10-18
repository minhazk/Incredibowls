import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Board from './src/screens/Board';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, AntDesign } from '@expo/vector-icons';
// import { GameContextProvider } from './src/context/GameContext';
import { colours } from './src/styles/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerForm from './src/screens/PlayerForm';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const FormStack = createNativeStackNavigator();

function FormStackScreen() {
    return (
        <FormStack.Navigator>
            <FormStack.Screen name='Create' component={Create} />
            <FormStack.Screen name='PlayerForm' component={PlayerForm} />
        </FormStack.Navigator>
    );
}

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        // <GameContextProvider>
        // <SafeAreaProvider>
        //     <SafeAreaView>
        <NavigationContainer>
            <StatusBar style='auto' />
            <Tab.Navigator
                initialRouteName='Home'
                backBehavior='history'
                screenOptions={{
                    tabBarActiveTintColor: colours.primary,
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
                    component={FormStackScreen}
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
        // {/* </GameContextProvider> */}
        // {/* </SafeAreaView>
        // </SafeAreaProvider> */}
    );
};

export default App;
