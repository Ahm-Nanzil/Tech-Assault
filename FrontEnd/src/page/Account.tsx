import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome,Ionicons} from "@expo/vector-icons";
import Profile from '../Account Component/Profile';
import OrderHistoryPage from '../Account Component/OrderPage';
import FavouritePage from '../Account Component/FavouritePage';
import CreditCuppon from '../Account Component/Credit&CupponPage';
import InviteFriends from '../Account Component/InviteFriendsPage';
import ShippingAddressPage from '../Account Component/ShppingAddressPage';
import AccountSetting from '../Account Component/AccountSettingPage';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


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
        <OrderHistoryPage />
      </View>
    );
  }

function FavouriteScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FavouritePage />
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
        <ShippingAddressPage route={undefined} />
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

 

function LogoutScreen() {
  const authContext = useContext(AuthContext);
  return (
    authContext?.logout()

  );
  }
  const handleApiCall = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/ahmnanzil33@gmail.com');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  
  
  function Account() {
    const Stack = createStackNavigator();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Orders" component={OrderScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="CreCup" component={CreditCupponScreen} />
        <Stack.Screen name="Friends" component={InviteFriendScreen} />
        <Stack.Screen name="Ship" component={ShippingScreen} />
        <Stack.Screen name="AcSetting" component={AccountSettingScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />



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
              <Ionicons name="archive-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Favourite')}>
              <Text style={styles.text}>My Favourite</Text>
              <FontAwesome name="star" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CreCup')}>
              <Text style={styles.text}>Credits & Cuppons</Text>
              <Ionicons name="card-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Friends')}>
              <Text style={styles.text}>Invite Friends through APi</Text>
              <Ionicons name="add-circle-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Ship')}>
              <Text style={styles.text}>Shipping Address</Text>
              <Ionicons name="location-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AcSetting')}>
              <Text style={styles.text}>Account Setting</Text>
              <Ionicons name="settings-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Logout')}>
              <Text style={styles.text}>Logout</Text>
              <Ionicons name="log-in-sharp" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={handleApiCall}>
              <Text style={styles.text}>Extra API Call</Text>
              <Ionicons name="code-slash" color="white" size={20} style={styles.icon} />
            </TouchableOpacity>

        </View>
       
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    personalinfo: {
        height: 200,
        width: '90%',
        backgroundColor: 'tomato',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        marginLeft:'4%',
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
        color:'gray',
      },
      text:{
        fontSize:17,
      }

  });

  export default Account;