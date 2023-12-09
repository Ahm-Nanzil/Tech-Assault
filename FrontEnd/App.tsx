import React, { useContext, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import Dashboard from "./src/page/Dashboard";
import CartPage from "./src/page/Cart";
import Account from "./src/page/Account";
import LoginPage from "./src/page/Login";

const BottomTab = createBottomTabNavigator();

const App = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    console.log("isLoggedIn:", auth?.isLoggedIn);
  }, [auth?.isLoggedIn]);

  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            <BottomTab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "TechAssult") {
                    iconName = "home"; // Replace with the name of your home icon
                    return <FontAwesome name={iconName} size={size} color={color} />;
                  } else if (route.name === "Chekout From here") {
                    iconName = "shopping-cart"; // Replace with the name of your cart icon
                    return <FontAwesome name={iconName} size={size} color={color} />;
                  } else if (route.name === "Account") {
                    iconName = "person-circle-outline"; // Replace with the name of your account icon
                    return <Ionicons name={iconName} size={size} color={color} />;
                  }
                  else if (route.name === "Please Login") {
                    iconName = "arrow-back-circle-outline"; // Replace with the name of your account icon
                    return <Ionicons name={iconName} size={size} color={color} />;
                  }
                },
              })}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
                style: {
                  display: "flex",
                },
              }}
            >
              <BottomTab.Screen
                name="TechAssult"
                component={Dashboard}
                options={{ tabBarLabel: "Home" }}
              />
              <BottomTab.Screen
                name="Chekout From here"
                component={CartPage}
                options={{ tabBarLabel: "Cart" }}
              />
              {auth?.isLoggedIn ? (
                <BottomTab.Screen name="Account" component={Account} />
              ) : (
                <BottomTab.Screen
                  name="Please Login"
                  component={LoginPage}
                  options={{ tabBarLabel: "Login" }}
                />
              )}
            </BottomTab.Navigator>
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
