import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Linking } from 'react-native';
import { styles } from "../../styles";
import { getShowInPrismic } from '../../helpers';
import ScheduleItem from '../ScheduleItem';
import { SvgXml } from 'react-native-svg';
import { closeButton } from '../../assets/vectors/Vectors';

const handleLinkPress = async (url) => {
    const scheduleURL = url;
    await Linking.openURL(scheduleURL);
};

const ScheduleModal = ({ scheduleData, residentsData, isVisible, onClose }) => {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Format the date to include ordinal suffix (e.g., 22nd, 23rd, etc.)
    const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const formattedDate = `${currentDate.getDate()}${getOrdinalSuffix(currentDate.getDate())} ${currentDate.toLocaleString('default', { month: 'long' })}`;

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Pressable style={styles.modalButton} onPress={onClose}>
                        <SvgXml
                            xml={closeButton}
                            width={32}
                            height={32}
                            style={{ marginLeft: 0 }}
                        />
                    </Pressable>
                    <Text style={styles.modalH1}>{dayOfWeek} {formattedDate}</Text>
                    <ScrollView fadingEdgeLength={150}>
                        
                        <Text style={styles.modalH2}>Coming up...</Text>
                        {scheduleData.scheduleDataArray.map((scheduleItemData, i) => {
                            const listNumber = i;
                            const id = scheduleItemData.id;
                            const showName = scheduleItemData.name;
                            const showStarts = scheduleItemData.starts;
                            return (
                                <ScheduleItem key={id} listNumber={listNumber} showName={showName} showStarts={showStarts} />
                            );
                        }
                        )
                        }
                        <ScheduleItem></ScheduleItem>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                            <Pressable
                                style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' }, styles.button]} onPress={() => handleLinkPress('https://www.ehfm.live/schedule/')}>
                                {({ pressed }) => (
                                    <Text style={[{ color: pressed ? 'rgb(0,179,152)' : 'white' }, styles.buttonText]}>
                                        Full schedule ↗️
                                    </Text>
                                )}
                            </Pressable>
                        </View>
                </View>
            </View>
        </RNModal>
    );
};

export default ScheduleModal;