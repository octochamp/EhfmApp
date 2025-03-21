import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { formatReadableTime, format24hTime } from '../helpers';
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
        if (!currentShowData) {
            return { name: '', starts: '', ends: '' };
        } else {
            return currentShowData;
        }
    };

    // create variables which we can safely access
    const checkedCurrentShowData = checkCurrentShowData();

    let currentShowDescription = getPrismicShowDescription({ currentShowData, residentsData })

    // Check if a show description is provided, if not use generic
    // March 2025: leaving generic as blank for now, can change later if preferred.
    if (!currentShowDescription || currentShowDescription === '') {
        currentShowDescription = ''
    }

    // If show isn't loaded (name is blank) then make show description blank too. This is used to prevent generic description flashing in while app loading.
    if (checkedCurrentShowData['name'] === '') {
        currentShowDescription = ''
    }

    // Check if the show is listed as a repeat. if it is, then reformat the (R) at the end of the title into something more elegant.
    if (checkedCurrentShowData['name'].slice(-3) === '(R)') {
        const checkedCurrentShowDataNameApostropheFix = checkedCurrentShowData['name'].replace(/&#039;/g, "'");
        const currentShowNameNoR = checkedCurrentShowDataNameApostropheFix.slice(0, -3);
        return (
            <>
                <Text style={[styles.nowText, styles.nowTimeText]}>{format24hTime(checkedCurrentShowData['starts'])}</Text>
                <Text style={[styles.nowText, styles.nowTitleText]} numberOfLines={5}>{currentShowNameNoR}</Text>
                <Text style={[styles.nowText, styles.nowDescriptionText]}>(Replay) {currentShowDescription}</Text>
            </>
        )
    } else {
        return (
            <>
                <Text style={[styles.nowText, styles.nowTimeText]}>{format24hTime(checkedCurrentShowData['starts'])}</Text>
                <Text style={[styles.nowText, styles.nowTitleText]} numberOfLines={5}>{checkedCurrentShowData['name'].replace(/&#039;/g, "'")} </Text>
                <Text style={[styles.nowText, styles.nowDescriptionText]}>{currentShowDescription}</Text>
            </>
        )
    }
};

export default ScheduleNow;