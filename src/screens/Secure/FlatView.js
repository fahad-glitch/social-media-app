import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useCSVData from "../../hooks/useCSVData";
import { Touchable } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import ButtonFilter from "../../components/ButtonFilter";
export default function FlatView() {
  const [tabular, setTabular] = useState(true);
  const [sortedData, setSortedData] = useState([]);
  const [classFlag, setClassFlag] = useState(false);
  const parentData = [
    {
      baseFare: 1059,
      reservationCharge: 60,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 56,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 1175,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0008" },
        { date: "3-12-2023", status: "AVAILABLE-0014" },
        { date: "5-12-2023", status: "AVAILABLE-0011" },
        { date: "6-12-2023", status: "AVAILABLE-0004" },
        { date: "7-12-2023", status: "AVAILABLE-0014" },
        { date: "9-12-2023", status: "AVAILABLE-0012" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "SRID",
      classCode: "1A",
      distance: 54,
      duration: 33,
    },
    {
      baseFare: 626,
      reservationCharge: 50,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 34,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 710,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0020" },
        { date: "3-12-2023", status: "AVAILABLE-0026" },
        { date: "5-12-2023", status: "AVAILABLE-0029" },
        { date: "6-12-2023", status: "AVAILABLE-0018" },
        { date: "7-12-2023", status: "AVAILABLE-0026" },
        { date: "9-12-2023", status: "AVAILABLE-0022" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "SRID",
      classCode: "2A",
      distance: 54,
      duration: 33,
    },
    {
      baseFare: 441,
      reservationCharge: 40,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 24,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 505,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0136" },
        { date: "3-12-2023", status: "AVAILABLE-0192" },
        { date: "5-12-2023", status: "AVAILABLE-0185" },
        { date: "6-12-2023", status: "AVAILABLE-0139" },
        { date: "7-12-2023", status: "AVAILABLE-0154" },
        { date: "9-12-2023", status: "AVAILABLE-0140" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "SRID",
      classCode: "3A",
      distance: 54,
      duration: 33,
    },
    {
      baseFare: 125,
      reservationCharge: 20,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 0,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 145,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0090" },
        { date: "3-12-2023", status: "AVAILABLE-0101" },
        { date: "5-12-2023", status: "AVAILABLE-0100" },
        { date: "6-12-2023", status: "AVAILABLE-0067" },
        { date: "7-12-2023", status: "AVAILABLE-0118" },
        { date: "9-12-2023", status: "AVAILABLE-0125" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "SRID",
      classCode: "SL",
      distance: 54,
      duration: 33,
    },
    {
      baseFare: 1059,
      reservationCharge: 60,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 56,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 115,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0008" },
        { date: "3-12-2023", status: "AVAILABLE-0014" },
        { date: "5-12-2023", status: "AVAILABLE-0011" },
        { date: "6-12-2023", status: "AVAILABLE-0004" },
        { date: "7-12-2023", status: "AVAILABLE-0014" },
        { date: "9-12-2023", status: "AVAILABLE-0012" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "KKB",
      classCode: "1A",
      distance: 69,
      duration: 49,
    },
    {
      baseFare: 626,
      reservationCharge: 50,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 34,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 710,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0020" },
        { date: "3-12-2023", status: "AVAILABLE-0026" },
        { date: "5-12-2023", status: "AVAILABLE-0029" },
        { date: "6-12-2023", status: "AVAILABLE-0018" },
        { date: "7-12-2023", status: "AVAILABLE-0026" },
        { date: "9-12-2023", status: "AVAILABLE-0022" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "KKB",
      classCode: "2A",
      distance: 69,
      duration: 49,
    },
    {
      baseFare: 441,
      reservationCharge: 40,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 24,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 505,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0136" },
        { date: "3-12-2023", status: "AVAILABLE-0192" },
        { date: "5-12-2023", status: "AVAILABLE-0185" },
        { date: "6-12-2023", status: "AVAILABLE-0139" },
        { date: "7-12-2023", status: "AVAILABLE-0154" },
        { date: "9-12-2023", status: "AVAILABLE-0140" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "KKB",
      classCode: "3A",
      distance: 69,
      duration: 49,
    },
    {
      baseFare: 125,
      reservationCharge: 20,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 0,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 145,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0090" },
        { date: "3-12-2023", status: "AVAILABLE-0101" },
        { date: "5-12-2023", status: "AVAILABLE-0100" },
        { date: "6-12-2023", status: "AVAILABLE-0067" },
        { date: "7-12-2023", status: "AVAILABLE-0118" },
        { date: "9-12-2023", status: "AVAILABLE-0125" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "KKB",
      classCode: "SL",
      distance: 69,
      duration: 49,
    },
    {
      baseFare: 1059,
      reservationCharge: 60,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 56,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 1175,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0008" },
        { date: "3-12-2023", status: "AVAILABLE-0014" },
        { date: "5-12-2023", status: "AVAILABLE-0011" },
        { date: "6-12-2023", status: "AVAILABLE-0004" },
        { date: "7-12-2023", status: "AVAILABLE-0014" },
        { date: "9-12-2023", status: "AVAILABLE-0012" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "NU",
      classCode: "1A",
      distance: 85,
      duration: 72,
    },
    {
      baseFare: 626,
      reservationCharge: 50,
      superfastCharge: 0,
      fuelAmount: 0,
      totalConcession: 0,
      tatkalFare: 0,
      serviceTax: 34,
      otherCharge: 0,
      cateringCharge: 0,
      dynamicFare: 0,
      totalFare: 740,
      availability: [
        { date: "2-12-2023", status: "AVAILABLE-0020" },
        { date: "3-12-2023", status: "AVAILABLE-0025" },
        { date: "5-12-2023", status: "AVAILABLE-0029" },
        { date: "6-12-2023", status: "AVAILABLE-0018" },
        { date: "7-12-2023", status: "AVAILABLE-0026" },
        { date: "9-12-2023", status: "AVAILABLE-0022" },
      ],
      trainNumber: 11464,
      timeStamp: "13:07.8",
      fromStnCode: "JBP",
      toStnCode: "NU",
      classCode: "2A",
      distance: 85,
      duration: 72,
    },
  ];
  const [data, setData] = useState();
  const tableHead = ["Train", "Class", "Base Fare", "Total Fare", "Service"];

  const buttonItem = [
    {
      title: "All",
      handleChange: () => {
        setData(parentData);
        setClassFlag(false);
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
        <Text style={styles.text}>{item.classCode}</Text>
      </View>
    );
  };

  const sortByLessBaseFare = () => {
    if (classFlag) {
      const newData = data.sort((a, b) => a.totalFare - b.totalFare);
      setData(newData);
    } else {
      const newData = parentData.sort((a, b) => a.totalFare - b.totalFare);
      setData(newData);
    }
  };
  const sortByMoreBaseFare = () => {
    if (classFlag) {
      const newData = data.sort((a, b) => b.totalFare - a.totalFare);
      setData(newData);
    } else {
      const newData = parentData.sort((a, b) => b.totalFare - a.totalFare);
      setData(newData);
    }
  };
  useEffect(() => {
    setData(parentData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const selectClass = (className) => {
    const newData = parentData.filter((item) => item.classCode == className);
    setData(newData);
    setClassFlag(true);
  };
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

      {/* <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          paddingVertical: 16,
          fontSize: 20,
        }}
      >

        {tabular ? "Tabular View" : "FlatList View"}
      </Text> */}
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
