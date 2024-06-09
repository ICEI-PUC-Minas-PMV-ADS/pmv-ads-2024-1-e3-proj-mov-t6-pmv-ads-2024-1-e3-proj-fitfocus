import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./components/Login"
import { Home } from "./components/Home"


export const Route = () => {
    const {authState, onLogout} = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator>
            { authState?.authenticated ? (
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
            ) : (
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
            )};

            </Stack.Navigator>
        </NavigationContainer>
    );
};