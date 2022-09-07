import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet,Image,SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

import React from 'react';


const MyTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,5)'
  }
}

function FeedScreen({navigation}){
  return(
    <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
        <Text>Feed Screen</Text>
        <Button title='Open drawer' onPress={()=> navigation.openDrawer()}/>
    </View>
  )
}

function NotificationScreen(){
  return(
    <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
      <Text>Notification Screen</Text>
    </View>
  )
}



function CustomDrawerContent(props){
  return(
    <SafeAreaView>
      <Image
        source={require('./assets/react_logo.png')}
        style={styles.sideMenuProfileIcon}
     />
    <DrawerContentScrollView {...props}>
     <DrawerItemList {...props}/>
     <DrawerItem 
     label="Close Drawer"
     onPress={() => props.navigation.closeDrawer()}
     />
    </DrawerContentScrollView>
    </SafeAreaView>
  )
}


const Drawer = createDrawerNavigator();

function MyDrawer(){
  return(
      <Drawer.Navigator 
      useLegacyImplementation
      drawerContent={(props)=><CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerStyle:{
          // backgroundColor:'#F6E4FF',
          width:240
        }
      }}
      >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Notification' component={NotificationScreen}/>
      </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
})