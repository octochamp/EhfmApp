import React from 'react';
import { View, Text, ScrollView, Pressable, Modal as RNModal } from 'react-native';
import { styles } from "../../styles";
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

const ModalBackground = ({ isVisible, onClose }) => {
    return (
        <RNModal visible={isVisible} animationType="fade" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalBackgroundContainer}>
                    <View style={{opacity: 0}}>
                            <Text style={styles.modalH1}> </Text>
                    </View>
            </View>
        </RNModal>
    );
};

export default ModalBackground;