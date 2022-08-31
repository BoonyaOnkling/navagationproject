import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

import React from 'react';


function FeedScreen({navigation}){
  return(
    <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
        <Text>FeedScreen</Text>

    </View>
  )
}

function ArticleScreen(){
  return(
    <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
      <Text>ArticleScreen</Text>
    </View>
  )
}

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView {...props}>
     <DrawerItemList {...props}/>
     <DrawerItem label='Help' onPress={()=>aleret('Link to help')} />
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
          backgroundColor:'#F6E4FF',
          width:240
        }
      }}
      >
        <Drawer.Screen name='Feed' component={FeedScreen}/>
        <Drawer.Screen name='Article' component={ArticleScreen}/>
      </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App
