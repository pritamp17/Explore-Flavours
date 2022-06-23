import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text } from "react-native"
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
      >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};



