import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal, Button } from 'react-native';
import { styles } from "../../styles";

const ListenBackModal = ({ isVisible, onClose }) => {
    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        <Text style={styles.modalH1}>EHFM shows are archived on Mixcloud</Text>
                        <Text style={styles.modalBody}>We recommend the Mixcloud app for the best listening experience.</Text>
                    </ScrollView>
                    <Button title="Open Mixcloud" onPress={() => {}}></Button>
                    <Pressable style={styles.modalButton} onPress={onClose}>
                        <Text>CLOSE</Text>
                    </Pressable>
                </View>
            </View>
        </RNModal>
    );
};

export default ListenBackModal;