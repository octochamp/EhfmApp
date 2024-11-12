import React from 'react';
import { Text, View } from 'react-native';
import { formatReadableTime } from '../helpers';
import { styles } from '../styles';

const Schedule = ({ currentShowData, nextShowData }) => {

    // check that the show data is being returned as an object containing data, not a null
    // if null is being returned (due to error handling in useCurrentShowData() etc),
    // then output empty strings for each key-value pair that we use (ie. 'name', 'ends')
    const checkCurrentShowData = () => {
        if (currentShowData === null) {
            return { name: '' };
        } else {
            return currentShowData;
        }
    };
    const checkNextShowData = () => {
        if (nextShowData === null) {
            return { name: '', ends: '' };
        } else {
            return nextShowData;
        }
    };

    // create variables which we can safely access
    const checkedCurrentShowData = checkCurrentShowData();
    const checkedNextShowData = checkNextShowData();

    //console.log(currentShowData);

    return (
        <>
            <Text style={styles.showTitleText}>{checkedNextShowData['name']} </Text>
            <Text style={styles.timeText}>{formatReadableTime(checkedNextShowData['starts'])}</Text>
            <Text style={styles.showTitleText}>{checkedCurrentShowData['name']} </Text>            
            <Text style={styles.timeText}>{formatReadableTime(checkedCurrentShowData['starts'])}</Text>
        </>

    )
};

export default Schedule;
