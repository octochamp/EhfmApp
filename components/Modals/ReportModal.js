import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button, Linking } from 'react-native';
import { styles } from "../../styles";

const ReportModal = ({ isVisible, onClose }) => {
    const handleReportPress = async () => {
        const url = 'https://www.grpahicdeisgn.com/contact/';
        const appUrl = 'mailto://nathan@grpahicdeisgn.com';

        try {
            // First try to open in app
            const canOpenApp = await Linking.canOpenURL(appUrl);
            if (canOpenApp) {
                await Linking.openURL(appUrl);
            } else {
                // If app isn't installed, open in browser
                await Linking.openURL(url);
            }
        } catch (error) {
            console.error('Error opening email link:', error);
            // Fallback to browser if there's any error
            await Linking.openURL(url);
        }
    };

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>🪲 Found a bug?</Text>
                        <Text style={styles.modalH2}>Thanks for joining the private beta!</Text>
                        <Text style={styles.modalBody}>This app is a work in progress and any feedback you can give is really useful for getting it ready for launch.</Text>
                        <Text style={styles.modalBody}>Email me below or drop me a message on insta @nathandavidsmith</Text>
                        <Text style={styles.modalBody}>Nathan 💞</Text>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' }, styles.button]} onPress={() => handleReportPress()}>
                            {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'rgb(0,179,152)' : 'white' }, styles.buttonText]}>
                                    ⚠️ Report an issue ⚠️
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

export default ReportModal;