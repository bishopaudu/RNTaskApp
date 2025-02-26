import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import SplashScreen from "./screens/splashscreen"
import HomeScreen from "./screens/homescreen"

const Stack = createNativeStackNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
    
}