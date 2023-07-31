import React from 'react';
import { Text } from 'react-native';
import useCurrentShowData from "../hooks/useCurrentShowData";

const Schedule = () => {

    // TODO: Check if this updates when shows change over or if it needs an event listener?

    // get current show data from useCurrentShowData()
    const currentShowData = useCurrentShowData();;
    // check that currentShowData is returning an object containing data, not a null
    const checkCurrentShowData = () => {
        if (currentShowData === null) {
            return { name: '' };
        } else {
            return currentShowData;
        }
    };
    // checkedShowData is what we can access
    const checkedShowData = checkCurrentShowData();
    
    //console.log(currentShowData);

    return (
        <>
        <Text>On now: {checkedShowData['name']} </Text>
        <Text>Up next: {} </Text>
        </>
    )
};

export default Schedule;
