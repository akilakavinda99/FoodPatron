import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Chip } from 'react-native-paper'

function FundFilterChips() {
    const [selected, setSelected] = useState(false);
    const [chipStyle, setChipStyle] = useState({
        backgroundColor: "#fff",
        borderColor: "#13B156",
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    })

    useEffect(() => {
        if (selected) {
            setChipStyle({
                backgroundColor: "#E8F8EF",
                borderColor: "#13B156",
                borderWidth: 1,
                marginHorizontal: 5,
                marginTop: 10,
            })
        } else {
            setChipStyle({
                backgroundColor: "#fff",
                borderColor: "#13B156",
                borderWidth: 1,
                marginHorizontal: 5,
                marginTop: 10,
            })
        }
    }, [selected])

    const onPressChip = () => {
        setSelected(!selected);
    }

    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 20,
        }}>

            <Chip onPress={onPressChip}
                mode="outlined"
                selectedColor="#13B156"
                style={chipStyle}
                textStyle={{
                    fontSize: 12,
                }}
            >All</Chip>

            <Chip onPress={onPressChip}
                mode="outlined"
                selectedColor="#13B156"
                style={chipStyle}
                textStyle={{
                    fontSize: 12,
                }}
            >Ongoing</Chip>

            <Chip onPress={onPressChip}
                mode="outlined"
                selectedColor="#13B156"
                style={chipStyle}
                textStyle={{
                    fontSize: 12,
                }}
            >Completed</Chip>

            <Chip onPress={onPressChip}
                mode="outlined"
                selectedColor="#13B156"
                style={chipStyle}
                textStyle={{
                    fontSize: 12,
                }}
            >Pending</Chip>

        </View>
    )
}

export default FundFilterChips