import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button, Linking } from 'react-native';
import { styles } from "../../styles";

const ListenBackModal = ({ isVisible, onClose }) => {
    const handleMixcloudPress = async () => {
        const mixcloudUrl = 'https://www.mixcloud.com/ehfm/';
        const mixcloudAppUrl = 'mixcloud://ehfm'; // Mixcloud app deep link format

        try {
            // First try to open in Mixcloud app
            const canOpenMixcloud = await Linking.canOpenURL(mixcloudAppUrl);
            if (canOpenMixcloud) {
                await Linking.openURL(mixcloudAppUrl);
            } else {
                // If app isn't installed, open in browser
                await Linking.openURL(mixcloudUrl);
            }
        } catch (error) {
            console.error('Error opening Mixcloud:', error);
            // Fallback to browser if there's any error
            await Linking.openURL(mixcloudUrl);
        }
    };

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>EHFM shows are archived on Mixcloud</Text>
                        <Text style={styles.modalBody}>For the best experience, get the Mixcloud app from your app store.</Text>
                    </ScrollView>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' }, styles.button]} onPress={() => handleMixcloudPress()}>
                            {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'rgb(0,179,152)' : 'white' }, styles.buttonText]}>
                                    EHFM Mixcloud 🎧
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

export default ListenBackModal;