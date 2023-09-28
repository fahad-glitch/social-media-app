import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SYSTEMCOLOR } from "../../constant/Colors";
import { useNavigation } from "@react-navigation/native";
import getRequest from "../../services/Request";

export const Chat = () => {
    const navigate=useNavigation();
  const [data, setData] = useState([
    {
      title: "Fahad Asif",
      time: "10:00 AM",
      message: "Hello",
      unread: true,
      messageAmount: "1",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      title: "Muhammad Rohan",
      time: "10:00 AM",
      message: "Hello",
      unread: false,
      messageAmount: "1",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      title: "Ali Sherazi",
      time: "10:00 AM",
      message: "Hello! this is Fahad Asif. How Are you",
      unread: true,
      messageAmount: "6",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
    {
      title: "Kunwar Ali",
      time: "10:00 AM",
      message: "Hello",
      unread: true,
      messageAmount: "1",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    },
  ]);

  
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listContainer} onPress={()=>{navigate.navigate("SingleChat",{name:item.title})}}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View style={styles.nameContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}  numberOfLines={1}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View style={styles.previewContainer}>
            <Text style={styles.preview} numberOfLines={1}>
              {item.message}
            </Text>
            {item.unread && (
              <View style={styles.badge}>
                <Text style={styles.badgeAmount}>{item.messageAmount}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{height:50,justifyContent:"center",backgroundColor:"#337CCF"}}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => {navigate.goBack()}}>
          <Text style={{ textAlign: "center" , color:"white", fontWeight:"bold",fontSize:16}}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ textAlign: "center" , color:"white",fontWeight:"bold",fontSize:16}}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ textAlign: "right" ,color:"white",fontWeight:"bold",fontSize:16}}>Profile</Text>
        </TouchableOpacity>
      </View>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={() => {}} contentContainerStyle={{marginVertical:10,paddingHorizontal: 20,}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SYSTEMCOLOR,
    
  },
  containerHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  //FlatList
  listContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor:"#FFC436",
    paddingVertical:10,
    paddingHorizontal:8,
    borderRadius:10
    // justifyContent:"space-between"
  },
  imageContainer: {
    flex: 0.2,
    justifyContent: "center",
  },
  image: {
    borderRadius: 50,
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleContainer: {
    flex: 1,
    // backgroundColor:"yellow",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex:0.8,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  time: {
    fontSize: 12,
    color: "gray",
  },
  previewContainer: {
    flex: 1,
    // backgroundColor:"red",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  preview: {
    flex: 0.8,
  },
  badge: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeAmount: {
    color: "white",
  },
});
