import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Results from '../screens/Results';
import { RootStackParamList } from '../types';
import Loading from '../screens/Loading';
import History from '../screens/History';
import Diseases from '../screens/Diseases';
import WhatsNew from '../screens/WhatsNew';
import "react-native-reanimated";
import React, { useEffect } from "react";
import { store } from '../redux/store';
import { initializeUserID } from '../redux/slices/authSlice';

const Routes = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const userID = store.getState().auth.userID;

    useEffect(() => {
        store.dispatch(initializeUserID());
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    gestureEnabled: false
                }}
            >
                <Stack.Screen
                    name = "Home"
                    component = { Home }
                    options = {{
                        headerShown: false,
                        gestureEnabled: false,
                        animationTypeForReplace: "pop"
                    }} 
                />
                <Stack.Screen
                    name = "History"
                    component = { History }
                    options = {{
                        headerShown: false,
                        gestureEnabled: true
                    }}
                />
                <Stack.Screen
                    name = "Diseases"
                    component = { Diseases }
                    options = {{
                        headerShown: false,
                        gestureEnabled: true
                    }} 
                />
                <Stack.Screen
                    name = "WhatsNew"
                    component = { WhatsNew }
                    options = {{
                        headerShown: false,
                        gestureEnabled: true
                    }} 
                />
                <Stack.Screen
                    name = "Loading"
                    component = { Loading }
                    options = {{
                        headerShown: false,
                        gestureEnabled: false
                    }} 
                />
                <Stack.Screen
                    name = "Results"
                    component = { Results }
                    options = {{
                        headerShown: false,
                        gestureEnabled: false
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;