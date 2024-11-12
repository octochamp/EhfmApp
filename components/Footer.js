import RadioPlayer from './RadioPlayer';
import ScheduleNow from './ScheduleNow'; 4
import ScheduleNext from './ScheduleNext';

import { View } from 'react-native';
import { styles } from "../styles";

const Footer = ({ currentShowData, nextShowData, residentsData, currentShowImageUrl }) => {

    return (
        <>
            <View style={styles.playingNext}>
                <ScheduleNext currentShowData={currentShowData} nextShowData={nextShowData} residentsData={residentsData} />
            </View>
            <View style={styles.playingNow}>
                <View style={styles.playingNowSchedule}>
                    <ScheduleNow currentShowData={currentShowData} nextShowData={nextShowData} residentsData={residentsData} />
                </View>
                <View style={styles.radioPlayer}>
                    <RadioPlayer currentShowData={currentShowData} nextShowData={nextShowData} residentsData={residentsData} currentShowImageUrl={currentShowImageUrl} />
                </View>
            </View>
        </>
    );
};

export default Footer;