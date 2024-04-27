import React from 'react';
import { Text, View } from 'react-native';
import { formatReadableTime } from '../helpers';
import { styles } from '../styles';

const ScheduleNext = ({ currentShowData, nextShowData, residentsData }) => {

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

    // check if the show is listed as a repeat. if it is, then reformat the (R) at the end of the title into something more elegant
    if (checkedNextShowData['name'].slice(-3) === '(R)') {
        const nextShowNameNoR = checkedNextShowData['name'].slice(0, -3);
        return (
            <>
                <Text style={[styles.nextText, styles.nextTimeText]} adjustsFontSizeToFit={true}>{formatReadableTime(checkedNextShowData['starts'])}</Text>
                <Text style={[styles.nextText, styles.nextTitleText]} adjustsFontSizeToFit={true}>{nextShowNameNoR}</Text>
                <Text style={[styles.nextText, styles.nextRepeatText]}>(Replay)</Text>
            </>)
    } else {
        return (
            <>
                <Text style={[styles.nextText, styles.nextTimeText]} adjustsFontSizeToFit={true}>{formatReadableTime(checkedNextShowData['starts'])}</Text>
                <Text style={[styles.nextText, styles.nextTitleText]} adjustsFontSizeToFit={true}>{checkedNextShowData['name']}</Text>
            </>

        )
    }

};

export default ScheduleNext;
