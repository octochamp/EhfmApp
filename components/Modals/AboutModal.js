import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal } from 'react-native';
import { styles } from "../../styles";

const AboutModal = ({ isVisible, onClose }) => {
    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <ScrollView>
                            <Text style={styles.modalH1}>EHFM is an online community radio station for Edinburgh.</Text>
                            <Text style={styles.modalBody}>Founded in 2018, EHFM was set up as a digital platform for local creative souls to express themselves. Since then, we’ve built up a loving community of presenters and volunteers who allow us to broadcast 24 hours a day, seven days a week.</Text>
                            <Text style={styles.modalBody}>Our programming approach is broad. We’ll play anything from club to Scottish traditional music; spoken word to panel discussions. </Text>
                            <Text style={styles.modalBody}>For six years EHFM broadcast from multi-arts venue Summerhall, until recently moving to a new purpose-built studio space housed within our new Leith-based cafe, Ground Floor. All proceeds from the cafe go towards powering our radio station.</Text>
                        </ScrollView>
                        <Pressable style={styles.modalButton} onPress={onClose}>
                            <Text>CLOSE</Text>
                        </Pressable>
                    </View>
            </View>
        </RNModal>
    );
};

export default AboutModal;