import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import ButtonFilter from "../../components/ButtonFilter";
import { app } from "../../services/Firebase";
import { getDatabase, onValue, ref } from "firebase/database";
export default function FlatView() {
  const [tabular, setTabular] = useState(false);
  const [parentData, setParentData] = useState(null);
  const [data, setData] = useState(null);

  const tableHead = ["Train", "Class", "Base Fare", "Total Fare", "Service"];

  const buttonItem = [
    {
      title: "All",
      handleChange: () => {
        setData(parentData);
      },
    },
    {
      title: "Less To More",
      handleChange: () => sortByLessBaseFare(),
    },
    {
      title: "More To Less",
      handleChange: () => sortByMoreBaseFare(),
    },
    {
      title: "1A",
      handleChange: () => selectClass("1A"),
    },
    {
      title: "2A",
      handleChange: () => selectClass("2A"),
    },
    {
      title: "3A",
      handleChange: () => selectClass("3A"),
    },
    {
      title: "SL",
      handleChange: () => selectClass("SL"),
    },
  ];

  const tableData = data?.map((train) => [
    train.trainNumber,
    train.classCode,
    train.baseFare,
    train.totalFare,
    train.serviceTax,
  ]);

  const dataItem = ({ item }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{item.trainNumber}</Text>
        <Text style={styles.text}>{item.classCode}</Text>
        <Text style={styles.text}>{item.baseFare}</Text>
        <Text style={styles.text}>{item.totalFare}</Text>
        <Text style={styles.text}>{item.serviceTax}</Text>
      </View>
    );
  };

  const sortByLessBaseFare = () => {
    setData((prevData) => {
      const newData = [...prevData].sort((a, b) => a.totalFare - b.totalFare);
      console.log(newData);
      return newData;
    });
  };

  const sortByMoreBaseFare = () => {
    setData((prevData) => {
      const newData = [...prevData].sort((a, b) => b.totalFare - a.totalFare);
      console.log(newData);
      return newData;
    });
  };

  const selectClass = (className) => {
    const newData = parentData.filter((item) => item.classCode == className);
    setData(newData);
  };

  const fetchData = async () => {
    try {
      // Use require to import the JSON file
      const data = require("../../constant/Dataset.json");

      // Set the JSON data in the state
      console.log(data);
      setParentData(data);
      setData(data);
    } catch (error) {
      console.error("Error reading JSON file:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const db = getDatabase(app);
    const dbRef = ref(db, "flag");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setTabular(data.tabular);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          paddingBottom: 20,
          fontSize: 24,
        }}
      >
        Train Price Data
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 10,
          paddingVertical: 10,
        }}
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ gap: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {buttonItem.map((item, index) => (
            <ButtonFilter
              key={index}
              title={item.title}
              handleChange={item.handleChange}
              tabular={tabular}
            />
          ))}
        </ScrollView>
      </View>
      {tabular ? (
        <View style={styles.containerTable}>
          <ScrollView>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={tableHead}
                style={[styles.header, { backgroundColor: "#557C55" }]}
                textStyle={styles.textHeader}
              />
              <Rows
                data={tableData}
                style={[styles.row, { backgroundColor: "#EEE7DA" }]}
                textStyle={styles.text}
              />
            </Table>
          </ScrollView>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, key) => key}
          renderItem={dataItem}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.textHeader}>Train</Text>
              <Text style={styles.textHeader}>Class</Text>
              <Text style={styles.textHeader}>Base Fare</Text>
              <Text style={styles.textHeader}>Total Fare</Text>
              <Text style={styles.textHeader}>Service</Text>
            </View>
          )}
          contentContainerStyle={{}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#C1C0B9",
    marginBottom: 10,
    backgroundColor: "#5151C6",
    borderRadius: 10,
    alignItems: "center",
  },
  row: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F1F1FE",
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
  text: {
    flex: 0.2,
    margin: 6,
    textAlign: "center",
    fontSize: 16,
  },
  textHeader: {
    flex: 1,
    fontSize: 16,
    margin: 6,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  containerTable: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flex: 1,
    backgroundColor: "#5151C6",
    borderRadius: 10,
    alignItems: "center",
  },
});
