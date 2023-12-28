import React from 'react'
import { Modal, StyleSheet, TextInput } from 'react-native'

export default function FilterModal({visible, handleTextChange, handleFilter}) {
  return (
    <Modal visible={visible} transparent={true}>
        <View style={styles.container}>
            <View>
                <Text>Filter Modal</Text>
                <TextInput placeholder="Class Code such as 1A" onChangeText={handleTextChange} />
                <Button title="Filter" onPress={handleFilter} />
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:rgba(0,0,0,0.5),
        justifyContent:"center",
        alignItems:"center",
    },

})
