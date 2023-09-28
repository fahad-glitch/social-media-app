import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import getRequest from "../../services/Request";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function SingleChat() {
  const [apiData, setApiData] = useState(null);
  const navigate = useNavigation();
  const route= useRoute();

  //   let apiData= [];
  const loadData = async () => {
    try {
      const res = await getRequest("https://reactnative.dev/movies.json");
      console.log(res?.data);
      setApiData(res?.data);
      apiData && console.log("harami", apiData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    console.log("harami12", apiData);
  }, [apiData]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{}}>{item.title}</Text>
        <Text>{item.releaseYear}</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 50,
          justifyContent: "center",
          backgroundColor: "#337CCF",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {route?.params?.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                textAlign: "right",
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 20,textAlign:"center"}}>
      <Text style={{fontWeight:"bold",fontSize:20}}>{apiData?.title}</Text>
        <Text>{apiData?.description}</Text>
      </View>
      <FlatList
        data={apiData?.movies}
        renderItem={renderItem}
        keyExtractor={() => {}}
        // columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ marginVertical: 10, paddingHorizontal: 20 }}
      />
    </View>
  );
}
