import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Results from '../screens/Results';
import { RootStackParamList } from '../types';
import Loading from '../screens/Loading';
import History from '../screens/History';
import Diseases from '../screens/Diseases';
import WhatsNew from '../screens/WhatsNew';
import { useCachedResources } from '../hooks/useCachedResources';
import useDarkMode from '../hooks/useDarkMode';

const Routes = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const loading = useCachedResources();
    const { renderTheme } = useDarkMode();
    renderTheme();
    
    if (!loading) {
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
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }}
                    />
                    <Stack.Screen
                        name = "Diseases"
                        component = { Diseases }
                        options = {{
                            headerShown: false,
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "WhatsNew"
                        component = { WhatsNew }
                        options = {{
                            headerShown: false,
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "Loading"
                        component = { Loading }
                        options = {{
                            headerShown: false,
                            gestureEnabled: false,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "Results"
                        component = { Results }
                        options = {{
                            headerShown: false,
                            gestureEnabled: false,
                            animation: "slide_from_right"
                        }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <Loading />
        )
    }
}

export default Routes;