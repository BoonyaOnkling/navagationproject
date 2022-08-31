import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from '../components/style'

const FirstPage = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>

        <View style={{flex:1 ,justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.textTopStyle}>This is the First Page</Text>
        

        
         <Button
            title='GO TO SECOND PAGE'
            onPress={()=> {
                navigation.navigate('Second Page')
            }}
        />
         <Button
            title='GO TO THIRD PAGE'
            onPress={()=> {
                navigation.navigate('Third Page')
            }}
         />
        </View>

        <View style={styles.container}>
         <Text style={styles.textBottmStyle}>Thai-Nichi Institute of Technology</Text>
        </View>

     </View> 

     
    </>
  )
}

export default FirstPage