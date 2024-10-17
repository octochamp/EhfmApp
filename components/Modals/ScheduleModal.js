import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button, Linking } from 'react-native';
import { styles } from "../../styles";

const handleSchedulePress = async () => {
    const scheduleURL = 'https://www.ehfm.live/schedule/';
    await Linking.openURL(scheduleURL);
};

const ScheduleModal = ({ isVisible, onClose }) => {
    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>Coming soon!</Text>
                        <Text style={styles.modalBody}>Schedules in the app are in the works! For now, view the full schedule on ehfm.live.</Text>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' }, styles.button]} onPress={() => handleSchedulePress()}>
                            {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'rgb(0,179,152)' : 'white' }, styles.buttonText]}>
                                    Schedule ↗️
                                </Text>
                            )}
                        </Pressable>
                        <Pressable style={styles.modalButton} onPress={onClose}>
                            <Text style={styles.modalButtonText}>CLOSE</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </RNModal>
    );
};

export default ScheduleModal;