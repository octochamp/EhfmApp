import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button, Linking } from 'react-native';
import { styles } from "../../styles";
import currentVersion from '../../currentVersion';
import { SvgXml } from 'react-native-svg';
import { closeButton } from '../../assets/vectors/Vectors';

const BetaModal = ({ isVisible, onClose }) => {
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
                    <ScrollView fadingEdgeLength={150}>
                        <Text style={styles.modalH1}>Welcome! 👋</Text>
                        <Text style={styles.modalH2}>You're beta testing the new EHFM app!</Text>
                        <Text style={styles.modalBody}>Thanks for helping out! You might come across bugs or find that features are missing.</Text>
                        <Text style={styles.modalBody}>If you find a bug or have a suggestion, please let us know through TestFlight (on iOS) by shaking your device, or if you're on Android leave a review on the Play Store. You can also get in touch through the Report option in the menu.</Text>
                        <Text style={styles.modalSub}>EhfmApp v{currentVersion().version} {`(${currentVersion().releaseType})`}, built {currentVersion().buildDate}</Text>
                    </ScrollView>
                </View>
            </View>
        </RNModal>
    );
};

export default BetaModal;