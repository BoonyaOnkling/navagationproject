import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const DetelScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        //รายระเอียดสินค้า
        title: title,
      },
      [navigation, title]
    );
  });

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      console.log(res.data.data);
      //alert(JSON.stringify(res.data.data))
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error ไปที่ state ของ error ว่าเกิดจาก axios หรือ
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const _onRefresh = () => {
    getData(id);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.dataContainer}>
          <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
            <Text style={styles.thumbnail}>{index + 1}</Text>
            <View style={styles.dataContainer}>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>{item.ch_title}</Text>
                <Text note numberOfLines={1}>
                  {item.ch_dateadd}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item) => item.ch_id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        onRefresh={_onRefresh}
      />
    </View>
  );
};

export default DetelScreen;

const styles = StyleSheet.create({
  thumbnail: {
    width: 30,
    height: 30,
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
