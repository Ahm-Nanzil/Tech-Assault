import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome} from "@expo/vector-icons";

import Profile from '../Account Component/Profile';
import Order from '../Account Component/OrderPage';
import Favourite from '../Account Component/FavouritePage';
import CreditCuppon from '../Account Component/Credit&CupponPage';
import InviteFriends from '../Account Component/InviteFriendsPage';
import ShippingAddress from '../Account Component/ShppingAddressPage';
import AccountSetting from '../Account Component/AccountSettingPage';
import LoginPage from '../Account Component/LoginPage';



function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Profile />
      </View>
    );
  }
  
  function OrderScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Order />
      </View>
    );
  }

function FavouriteScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Favourite />
      </View>
    );
  }

function CreditCupponScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CreditCuppon />
      </View>
    );
  }

function InviteFriendScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <InviteFriends />
      </View>
    );
  }

function ShippingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ShippingAddress />
      </View>
    );
  }

function AccountSettingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AccountSetting />
      </View>
    );
  }

 

function LoginScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginPage />
      </View>
    );
  }
  
  function Account() {
    const Stack = createStackNavigator();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Orders" component={OrderScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="CreCup" component={CreditCupponScreen} />
        <Stack.Screen name="Friends" component={InviteFriendScreen} />
        <Stack.Screen name="Ship" component={ShippingScreen} />
        <Stack.Screen name="AcSetting" component={AccountSettingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />



      </Stack.Navigator>
    );
  }
  
  function AccountScreen({ navigation }) {
    return (

      <View>
        <View style={styles.personalinfo}>
            {/* <Image source={require('profile.png')} style={styles.icon} /> */}
            <FontAwesome name="user" size={100} color="white" />

            <Text style={styles.title}>Ahm Nanzil</Text>
        </View>
        <View style={styles.usesinfo}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Orders')}>
              <Text style={styles.text}>My Orders</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Favourite')}>
              <Text style={styles.text}>My Favourite</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CreCup')}>
              <Text style={styles.text}>Credits & Cuppons</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Friends')}>
              <Text style={styles.text}>Invite Friends</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Ship')}>
              <Text style={styles.text}>Shipping Address</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AcSetting')}>
              <Text style={styles.text}>Account Setting</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Login</Text>
              <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
        </View>
       
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    personalinfo: {
        height: 200,
        width: '100%',
        backgroundColor: 'tomato',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
      },
      usesinfo: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: "flex-start",
      },
      item: {
        marginLeft:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        width: "100%",
        fontSize:70,
      },
      icon: {
        marginRight: 30,
        color:'black',
      },
      text:{
        fontSize:17,
      }

  });

  export default Account;