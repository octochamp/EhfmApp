import React from 'react';
import { Text } from 'react-native';
import { formatReadableTime } from '../helpers';
import { styles } from '../styles';
/* import useCurrentShowData from "../hooks/useCurrentShowData";
import useNextShowData from "../hooks/useNextShowData"; */

const Schedule = ({currentShowData, nextShowData}) => {

    // TODO: Check if these update when shows change over or if they need an event listener?

    // get show data from useCurrentShowData() and useNextShowData()
/*     const currentShowData = useCurrentShowData();
    const nextShowData = useNextShowData(); */

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
        <Text style={ styles.bodyText }>On now: {checkedCurrentShowData['name']} </Text>
        <Text style={ styles.bodyText }>Up next: {checkedNextShowData['name']} at {formatReadableTime(checkedNextShowData['starts'])} </Text>
        <Text></Text>
        </>
    )
};

export default Schedule;
