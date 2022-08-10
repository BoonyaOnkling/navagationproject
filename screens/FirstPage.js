import { View, Text, StyleSheet,TextInput,Button } from 'react-native'
import React from 'react'

const FirstPage = ({navigation}) => {

    const [postText,setPostText] = React.useState('');

  return (
    
    <>
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text>Please insert your name to pass it to second screen</Text>

      <>
      <TextInput
      placeholder='Plese text here'
      style={styles.textStyle}
      onChangeText={setPostText}
      value={postText}
      />
      <Button
      title='GO NEXT'
      onPress={()=> {
        navigation.navigate('Second', { post: postText})
      }}
      />
    </>
    </View>
    <View style={{alignItems:'center'}}>
      <Text>www.tni.ac.th</Text>
    </View>
    </>
  )
}

export default FirstPage

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
},
heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
},
textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    padding:10,
    backgroundColor:'white'
},
});