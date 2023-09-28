import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
export default function Book() {
  const [data, setData] = useState([
    {
      title: "The Alchemist",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51ZU%2BCvkTyL._SX331_BO1,204,203,200_.jpg",
    },

    {
      title: "Art of War",
      image: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
    },
    {
      title: "Psychology of Money",
      image: "https://images-na.ssl-images-amazon.com/images/I/81cpDaCJJCL.jpg",
    },
    {
      title: "Zero to One",
      image: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg",
    },
    {
      title: "The Lean Startup",
      image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      title: "Rich Dad Poor Dad",
      image: "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg",
    },
  ]);
  const [searchData, setSearchData] = useState(data);
  const [loading, setLoading] = useState(true);
  const bookItem = ({ item }) => {
    return (
      <View style={styles.bookContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            onLoad={() => {
              console.log(loading);
              setLoading(false);
            }}
          />
          {loading && (
            <ActivityIndicator
              style={{ position: "absolute", alignSelf: "center" }}
            />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  };
  const searchhandler = (text) => {
    if (text.length === 0) {
      setData(searchData);
    } else {
      const newData = data.filter((item) => {
        return item.title.toLowerCase().includes(text.toLowerCase());
      });
      setData(newData);
    }
  };

  const loadData= async()=>{
    const api = getRequest("http://10.135.48.101:888/api/Books");
    console.log(api);
    // setData(api);
  }
  useEffect(()=>{
    loadData();
  })
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Books</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchItem}>
          <TextInput placeholder="Search" onChangeText={searchhandler} />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={bookItem}
        numColumns={3}
        columnWrapperStyle={{ paddingVertical: 10, gap: 10 }}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 0.333,
    gap: 20,
  },
  image: {
    borderRadius: 10,
    overflow: "hidden",
    height: height * 0.2,
  },

  header: {
    paddingVertical: 20,
  },
  imageContainer: {
    // alignItems:"center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  searchItem: {
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
