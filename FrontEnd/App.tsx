import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import Dashboard from "./src/page/Dashboard";
import CartPage from "./src/page/Cart";
import Account from "./src/page/Account";
import { Text,View } from "react-native";

const BottomTab = createBottomTabNavigator();



const App = () => {
return(
  
//   <AuthProvider>
//     <AuthContext.Consumer>
//       {(auth) => 
//         auth?.isLoggedIn ? (
//           <NavigationContainer>
//             <bottom_tab.Navigator>
//               <bottom_tab.Screen name="Dashboard" component={BasicDashboardScreen}></bottom_tab.Screen>
//               <bottom_tab.Screen name="Setting" component={SettingsPage}></bottom_tab.Screen>
//               <bottom_tab.Screen name="Nationalize" component={NationalizePage}></bottom_tab.Screen>
//             </bottom_tab.Navigator>
//           </NavigationContainer>
//         ) : (
//           <NavigationContainer>
//             <stack.Navigator screenOptions={{headerShown: false}}>
//                 <stack.Screen name='Counter' component={CounterPage}></stack.Screen>
//                 <stack.Screen name='Login' component={LoginPage}></stack.Screen>
//               </stack.Navigator>
//           </NavigationContainer>
//         )
//       }
//     </AuthContext.Consumer>
    
//   </AuthProvider>

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
        <BottomTab.Screen name="Account" component={Account} />
      </BottomTab.Navigator>
    </NavigationContainer>
)
}

export default App;