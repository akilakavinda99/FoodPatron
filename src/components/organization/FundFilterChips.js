import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Chip } from 'react-native-paper'

function FundFilterChips({ selectedChip, onSelectChip }) {
    const chipNotSelect = {
        backgroundColor: "#fff",
        borderColor: "#13B156",
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    }
    const chipSelect = {
        backgroundColor: "#E8F8EF",
        borderColor: "#13B156",
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 10,
    }

    const onPressChip = (value) => {
        onSelectChip(value);
    }

    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 20,
        }}>

            <Chip onPress={() => onPressChip("")}
                mode="outlined"
                selectedColor="#13B156"
                style={selectedChip === "" ? chipSelect : chipNotSelect}
                textStyle={{
                    fontSize: 12,
                }}
            >All</Chip>

            <Chip onPress={() => onPressChip("approved")}
                mode="outlined"
                selectedColor="#13B156"
                style={selectedChip === "approved" ? chipSelect : chipNotSelect}
                textStyle={{
                    fontSize: 12,
                }}
            >Ongoing</Chip>

            <Chip onPress={() => onPressChip("completed")}
                mode="outlined"
                selectedColor="#13B156"
                style={selectedChip === "completed" ? chipSelect : chipNotSelect}
                textStyle={{
                    fontSize: 12,
                }}
            >Completed</Chip>

            <Chip onPress={() => onPressChip("pending")}
                mode="outlined"
                selectedColor="#13B156"
                style={selectedChip === "pending" ? chipSelect : chipNotSelect}
                textStyle={{
                    fontSize: 12,
                }}
            >Pending</Chip>

        </View>
    )
}

export default FundFilterChips