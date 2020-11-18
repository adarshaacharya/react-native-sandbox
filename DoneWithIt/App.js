import React, { useState } from 'react';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);


  return (
    <Screen>
      <LoginScreen />
  
    </Screen>
  );
}
