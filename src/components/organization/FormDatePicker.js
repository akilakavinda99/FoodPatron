import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';

function FormDatePicker({ onChangeDate, minDate, maxDate }) {
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState("");
    const [show, setShow] = useState(false);

    // convert date to string
    const convertDateToString = (date) => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        // add 0 to month and day if they are less than 10
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        const dateString = `${year}-${month}-${day}`;

        return dateString;
    }

    const onChange = (event, selectedDate) => {
        onChangeDate(selectedDate); // pass date to parent component
        setShow(false);
        setDate(selectedDate);
        setDateString(convertDateToString(selectedDate));
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            {show && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    onChange={onChange}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                />
            )}
            <Pressable onPress={showDatepicker}>
                <TextInput
                    mode="outlined"
                    value={dateString}
                    editable={false}
                    onPress={() => showDatepicker}
                    onFocus={() => showDatepicker}
                    activeOutlineColor="#56616F"
                    outlineColor="#DADEE3"
                    theme={{
                        roundness: 100,
                        colors: { text: '#56616F' }
                    }}
                    style={{
                        backgroundColor: "white",
                        color: "red",
                        paddingHorizontal: 10,
                    }}
                    placeholder="Registration Date"
                    placeholderTextColor="#ADB2B6"
                    right={
                        <TextInput.Icon
                            icon="calendar"
                            color="#ADB2B6"
                        />
                    }
                />
            </Pressable>
        </View>
    )
}

export default FormDatePicker