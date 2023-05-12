import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import OnboardingScreen from './screens/OnboardingScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menu, setMenu] = useState([]);

  setMenu([{
    "name": "Greek Salad",
    "price": 12.99,
    "description": "Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients.",
    "image": "greekSalad.jpg",
    "category": "starters"
  },
  {
    "name": "Bruschetta",
    "price": 7.99,
    "description": "Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese.",
    "image": "bruschetta.jpg",
    "category": "starters"
  },
  {
    "name": "Grilled Fish",
    "price": 20.00,
    "description": "Fantastic grilled fish seasoned with salt.",
    "image": "grilledFish.jpg",
    "category": "mains"
  },
  {
    "name": "Pasta",
    "price": 6.99,
    "description": "Delicious pasta for your delight.",
    "image": "pasta.jpg",
    "category": "mains"
  },
  {
    "name": "Lemon Dessert",
    "price": 4.99,
    "description": "You can't go wrong with this delicious lemon dessert!",
    "image": "lemonDessert.jpg",
    "category": "desserts"
  }]);

  return (
    <NavigationContainer>

      {menu.length>1  ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>) : (
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}