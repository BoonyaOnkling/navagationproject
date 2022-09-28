import { StyleSheet, Text, View ,ActivityIndicator,FlatList,Image} from 'react-native' 
import React, { useEffect, useState } from "react";
 
 import axios from 'axios'
 
 const ProductScreen = () => {
 
     const [product,setProduct] = useState([])
     
         const getData= async ()=>{
            try {
                const res = await axios.get('https://api.codingthailand.com/api/course');
             console.log(res.data.data)
             //alert(JSON.stringify(res.data.data))
             setProduct(res.data.data);
              } catch (error) {
                console.error(error);
              } finally {
              }
         };
         
    
useEffect(()=>{
 getData();
},[]);

const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

     const _renderItem =({item}) =>{
        return(
            <View style={styles.dataContainer}>
                <View style={{flex:1, flexDirection:"row",margin:5}}>
                    <Image
                        resizeMode='cover'
                        source={{uri:item.picture}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.dataContainer}>
                        <View style={styles.dataContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.detail}>{item.detail}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
     }

   return (
     <View>
       <FlatList
        data={product}
        keyExtractor = {(item)=>item.id.toString()}
        ItemSeparatorComponent = {ItemSeparatorView}
        renderItem = {_renderItem}
       />
     </View>
   )
  }
 
  export default ProductScreen
 
 const styles = StyleSheet.create({
    container: {
        height: 80,
        elevation: 3,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    dataContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
    dataContent: {
        
        marginTop: 5,
        marginLeft: 15,
    },
    title:{

        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',

    },
    detail:{

        fontSize: 16,
        color: '#888',
        fontWeight: '700',

    },
 })