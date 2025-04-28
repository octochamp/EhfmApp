import React from 'react';
import { View, Text } from 'react-native';
import { format24hTime } from '../helpers'; // Assuming you have a similar helper function for formatting time in 24-hour format
import { styles } from '../styles'; // Assuming you have a similar styles object
const ScheduleItem = ({ listNumber, showName, showStarts }) => {
    const formattedTime = format24hTime(showStarts);

    return (
        <>
            <View>
                <Text style={styles.modalSpacer}> </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={{ flex: 1, paddingRight: 1, flexBasis: '10%', height: 'auto' }}>
                    <Text style={styles.modalScheduleTime}>{formattedTime}</Text>
                </View>
                <View style={{ flex: 1, flexBasis: '65%', height: 'auto' }}>
                    <Text style={styles.modalSchedule}>{showName}</Text>
                </View>
            </View>
        </>
    );
}

export default ScheduleItem;
