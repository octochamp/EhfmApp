import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button, Linking } from 'react-native';
import { styles } from "../../styles";
import currentVersion from '../../currentVersion';

const BetaModal = ({ isVisible, onClose }) => {
    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>Welcome! 👋</Text>
                        <Text style={styles.modalH2}>You're beta testing the app!</Text>
                        <Text style={styles.modalBody}>Thanks for taking the time to try it out. You might come across bugs or find that features are missing.</Text>
                        <Text style={styles.modalBody}>If you find a bug or have a suggestion, please let us know through TestPilot (on iOS) by shaking your device, or if you're on Android leave a review on the Play Store. You can also get in touch or help out with app development on Github through the Report option in the menu.</Text>
                        <Text style={styles.modalSub}>EhfmApp v{currentVersion()[0]} {`(${currentVersion()[2]})`}, built {currentVersion()[4]}</Text>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable style={styles.modalButton} onPress={onClose}>
                            <Text style={styles.modalButtonText}>CLOSE</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </RNModal>
    );
};

export default BetaModal;