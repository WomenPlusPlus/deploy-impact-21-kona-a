import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import DropdownQuestion from '../screens/dropdownQuestion';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DropdownQuestion" component={DropdownQuestion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
