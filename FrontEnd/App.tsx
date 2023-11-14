import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CounterPage from "./src/page/CounterPage";
import LoginPage from "./src/Account Component/LoginPage";
import SettingsPage from "./src/page/SettingPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import NationalizePage from "./src/page/NationalizePage";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import Dashboard from "./src/page/Dashboard";
import CartPage from "./src/page/Cart";
import Account from "./src/page/Account";

const stack = createStackNavigator();
const bottom_tab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name='Dashboard' component={Dashboard}></stack.Screen>
    </stack.Navigator>
  )
};

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
      <bottom_tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "TechAssult") {
              iconName = "home"; // Replace with the name of your home icon
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === "Cart") {
              iconName = "shopping-cart"; // Replace with the name of your cart icon
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === "Account") {
              iconName = "user"; // Replace with the name of your account icon
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <bottom_tab.Screen
          name="TechAssult"
          component={BasicDashboardScreen}
          options={{ tabBarLabel: "Home" }}
        />
        <bottom_tab.Screen name="Cart" component={CartPage} />
        <bottom_tab.Screen name="Account" component={Account} />
      </bottom_tab.Navigator>
    </NavigationContainer>
)
}

export default App;