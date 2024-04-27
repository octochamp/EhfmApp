import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { formatReadableTime } from '../helpers';
import { styles } from '../styles';
/* import useCurrentShowData from "../hooks/useCurrentShowData";
import useNextShowData from "../hooks/useNextShowData"; */
import {
    SHOW_NOT_FOUND,
    getShowInPrismic,
    parseShowName,
    sanitiseString,
} from "../helpers";

// A function to get the current show description from Prismic, same as the image fetching in ShowImage.js
const getPrismicShowDescription = ({ currentShowData, residentsData }) => {
    const [prismicShow, setPrismicShow] = useState(null);
    useEffect(() => {
        setPrismicShow(getShowInPrismic({ residentsData, currentShowData }));
    }, [currentShowData, residentsData]);
    const prismicShowDescription = () => {
        return (
            prismicShow &&
            prismicShow !== SHOW_NOT_FOUND &&
            prismicShow.data.show_description
        )
    };
    return prismicShowDescription()
}

const ScheduleNow = ({ currentShowData, nextShowData, residentsData }) => {

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

    let currentShowDescription = getPrismicShowDescription({ currentShowData, residentsData })
    //check if a show description is provided, if not use generic
    if (!currentShowDescription || currentShowDescription === '') {
        currentShowDescription = 'Edinburgh Community Radio'
    }

    // check if the show is listed as a repeat. if it is, then reformat the (R) at the end of the title into something more elegant
    if (checkedCurrentShowData['name'].slice(-3) === '(R)') {
        const currentShowNameNoR = checkedCurrentShowData['name'].slice(0, -3);
        return (
            <>
                <Text style={[styles.nowText, styles.nowTimeText]}>{formatReadableTime(checkedCurrentShowData['starts'])}</Text>
                <Text style={[styles.nowText, styles.nowTitleText]} numberOfLines={5}>{currentShowNameNoR}</Text>
                <Text style={[styles.nowText, styles.nowDescriptionText]}>(Replay) {currentShowDescription}</Text>
            </>
        )
    } else {
        return (
            <>
                <Text style={[styles.nowText, styles.nowTimeText]}>{formatReadableTime(checkedCurrentShowData['starts'])}</Text>
                <Text style={[styles.nowText, styles.nowTitleText]} numberOfLines={5}>{checkedCurrentShowData['name']} </Text>
                <Text style={[styles.nowText, styles.nowDescriptionText]}>{currentShowDescription}</Text>
            </>
        )
    }
};

export default ScheduleNow;