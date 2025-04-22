import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Linking } from 'react-native';
import { styles } from "../../styles";
import currentVersion from '../../currentVersion';

const ReportModal = ({ isVisible, onClose }) => {
    const handleReportPress = async (linkType, appUrl, webUrl) => {
        switch (linkType) {
            case 'app':
                try {
                    // First try to open in app
                    const canOpenApp = await Linking.canOpenURL(appUrl);
                    if (canOpenApp) {
                        await Linking.openURL(appUrl);
                    } else {
                        // If app isn't installed, open in browser
                        await Linking.openURL(webUrl);
                    }
                } catch (error) {
                    console.error('Error opening email link:', error);
                    // Fallback to browser if there's any error
                    await Linking.openURL(webUrl);
                }
                break;
            case 'web':
                await Linking.openURL(webUrl);
                break;
        };
    }

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>🪲 Found a bug?</Text>
                        <Text style={styles.modalH2}>Thanks for helping test the EHFM app!</Text>
                        <Text style={styles.modalBody}>It's a work in progress and any feedback you can give is really useful.</Text>
                        <Text style={styles.modalBody}>If you're comfortable using Github please raise issues on there, and if you're comfortable with React Native then your help is appreciated! Otherwise, report bugs through the Android Play Store or Apple's TestPilot.</Text>
                        <Text style={styles.modalBody}>🤓 Nathan</Text>
                        <Text style={styles.modalSub}>EhfmApp v{currentVersion()}</Text>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' }, styles.button]} onPress={() => handleReportPress('web', 'https://github.com/octochamp/EhfmApp/issues', 'https://github.com/octochamp/EhfmApp/issues')}>
                            {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'rgb(0,179,152)' : 'white' }, styles.buttonText]}>
                                    Github 👩‍💻
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