import RadioPlayer from './RadioPlayer';
import Schedule from './Schedule';
import useCurrentShowData from '../hooks/useCurrentShowData';
import useNextShowData from '../hooks/useNextShowData';
import usePrismicData from '../hooks/usePrismicData';

import { View, Image, ImageBackground, Text } from 'react-native';
import { styles } from "../styles";

const Footer = () => {
    // get show data from useCurrentShowData() and useNextShowData()
    const currentShowData = useCurrentShowData();
    const nextShowData = useNextShowData();
    const { aboutPageData, supportPageData, residentsData, carouselData } =
        usePrismicData();
    return (
        <View style={styles.footer}>
            <RadioPlayer />
            <Schedule currentShowData={currentShowData} nextShowData={nextShowData} />
        </View>
    );
};

export default Footer;