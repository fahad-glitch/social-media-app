import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function ButtonFilter({ title,handleChange, tabular}) {
  return (
    <TouchableOpacity
          onPress={handleChange}
          style={[styles.button, tabular && { backgroundColor: "#557C55" }]}
         
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {title}
          </Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5151C6",
        padding: 20,
        borderRadius: 10,
      },

})