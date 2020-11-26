import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Quiz from './screens/Quiz';
import QuizIndex from './screens/QuizIndex';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="QuizIndex"
          component={QuizIndex}
          options={{
            title: 'Quizzes',
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={(navigation) => ({
            title: navigation.route.params.title,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: navigation.route.params.color,
              borderBottomColor: navigation.route.params.color,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
