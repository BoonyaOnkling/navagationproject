import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

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
        <Button title='Toggle drawer' onPress={()=> navigation.toggleDrawer()}/>
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
    <DrawerContentScrollView {...props}>
     <DrawerItemList {...props}/>
     <DrawerItem 
     label="Close Drawer"
     onPress={() => props.navigation.closeDrawer()}
     />
     <DrawerItem 
     label="Toggle Drawer"
     onPress={() => props.navigation.toggleDrawer()}
     />
    </DrawerContentScrollView>
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
        <Drawer.Screen name='Feed' component={FeedScreen}/>
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
