import { useState, useEffect, useCallback } from "react";

export const useScheduleData = () => {
    const [airTimeSchedule, setAirtimeSchedule] = useState(null);
    const [scheduleDataArray, setScheduleDataArray] = useState(null);

    const scheduleApiCall = useCallback(() => {
        fetch("https://ehfm.airtime.pro/api/week-info")
            .then((response) => response.json())
            .then((data) => {
                delete data.AIRTIME_API_VERSION;
                setAirtimeSchedule(data);
            });
    }, []);

    useEffect(() => {
        scheduleApiCall();
    }, [scheduleApiCall]);

    const getRemainingShowsToday = (todaysSchedule) => {
        const now = Date.now();
        return todaysSchedule.filter((show) => {
            const browserAgnosticShowTimestamp = show.start_timestamp.replace(
                / /g,
                "T"
            );
            const startTimeInMs = new Date(browserAgnosticShowTimestamp).getTime();
            return startTimeInMs > now;
        });
    };

    useEffect(() => {
        const jsDays = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
        ];

        const twoWeeks = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
            "nextmonday",
            "nexttuesday",
            "nextwednesday",
            "nextthursday",
            "nextfriday",
            "nextsaturday",
            "nextsunday",
        ];

        const populateTodaysSchedule = () => {
            const daysIndex = new Date().getUTCDay();
            const daysString = jsDays[daysIndex];
            const showsUpNext = getRemainingShowsToday(airTimeSchedule[daysString]);
            showsUpNext && setScheduleDataArray(showsUpNext);
        };

        airTimeSchedule && populateTodaysSchedule();
    }, [airTimeSchedule]);

    return {
        scheduleDataArray
    };
};

export default useScheduleData;