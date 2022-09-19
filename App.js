import  'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context'





export default function App() {

 // const Stack=createStackNavigator()
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home Screen' component={ HomeScreen} />
          </Stack.Navigator> */}
       <HomeScreen />
        {/* </SafeAreaProvider>
        </NavigationContainer> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
