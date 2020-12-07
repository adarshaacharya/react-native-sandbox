import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text } from 'react-native';
import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() =>
        navigation.navigate('TweetDetails', {
          id: 1,
        })
      }
    />
  );
};

const Tweets = () => {
  return (
    <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetDetails = () => {
  const route = useRoute();

  return (
    <Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tweet Details</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </Screen>
  );
};

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        headerTintColor: 'white',
      }}
    />

    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
      })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const AccountNavigator =() => null
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'tomato',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
