import {StyleSheet, View, Text} from 'react-native';
import {StartPage} from './components/StartPage';
import {Home} from './components/Home';
import {useState} from 'react';
import {AddTodoPage} from './components/AddTodoPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <StartPage />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTodoPage" component={AddTodoPage} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
