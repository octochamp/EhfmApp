import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, ScrollView, Pressable, Linking, Modal as RNModal } from 'react-native';
import { styles } from "../../styles";
import { SvgXml } from 'react-native-svg';
import { closeButton, patreonLogo, paypalLogo } from '../../assets/vectors/Vectors';

const SupportModal = ({ isVisible, onClose }) => {

    // Add a state to trigger re-render
    const [, setForceUpdate] = useState({});

    // Add the layout effect here, right after your component's state/props
    useLayoutEffect(() => {
        if (isVisible) {  // Only trigger when modal becomes visible
            requestAnimationFrame(() => {
                console.log('*************** FORCING')
                setForceUpdate({});
            });
        }
    }, [isVisible]);

    const handlePatreonPress = useCallback(async () => {
        const url = 'https://www.patreon.com/ehfm_live';
        await Linking.openURL(url);
    });

    const handlePaypalPress = useCallback(async () => {
        const url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FNHL37CAF2JDJ&source=url/';
        await Linking.openURL(url);
    });

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, { flex: 0 }]}>
                    <Pressable style={styles.modalButton} onPress={onClose}>
                        <SvgXml
                            xml={closeButton}
                            width={32}
                            height={32}
                            style={{ marginLeft: 0 }}
                        />
                    </Pressable>
                    <Text style={styles.modalH2}>For as little as £2.99 a month, you can help support EHFM.</Text>
                    <ScrollView
                        fadingEdgeLength={150}
                        contentContainerStyle={{ flexGrow: 1 }}
                        bounces={false}
                    >
                        <View>
                            <Text style={styles.modalBody}>EHFM is a vibrant community of creative souls who represent scenes often overlooked by mainstream media outlets. We want to amplify their voices as much as possible, and provide meaningful and paid opportunities to our hard-working volunteers who allow EHFM to operate.</Text>
                            <Text style={styles.modalBody}>Your support will provide a stable, listener-driven source of income that we can use to plan future projects, tell more local stories, pay staff for their hard work and create even more meaningful radio for you, the listener.</Text>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', }}>
                            <Pressable
                                style={({ pressed }) => [
                                    { backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' },
                                    styles.button
                                ]}
                                onPress={() => handlePatreonPress()}
                            >
                                {({ pressed }) => (
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={[
                                            { color: pressed ? 'rgb(0,179,152)' : 'white' },
                                            styles.buttonText
                                        ]}>
                                            Subscribe on Patreon
                                        </Text>
                                        <SvgXml
                                            xml={patreonLogo}
                                            width={16}
                                            height={16}
                                            style={{ marginLeft: 8 }}
                                        />
                                    </View>
                                )}
                            </Pressable>
                        </View>
                        <View>
                            <Text style={styles.modalBody}>If you choose to become a subscriber, you’ll get all sorts of lovely perks such as discounts on our webstore, and a special members card that will get you into events and make you look incredibly cool.</Text>
                        </View>
                        <View style={{ width: '100%', alignItems: 'center', }}>
                        </View>
                        <Pressable
                            style={({ pressed }) => [
                                { backgroundColor: pressed ? 'white' : 'rgb(0,179,152)' },
                                styles.button
                            ]}
                            onPress={() => handlePaypalPress()}
                        >
                            {({ pressed }) => (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={[
                                        { color: pressed ? 'rgb(0,179,152)' : 'white' },
                                        styles.buttonText
                                    ]}>
                                        One-off payment
                                    </Text>
                                    <SvgXml
                                        xml={paypalLogo}
                                        width={16}
                                        height={16}
                                        style={{ marginLeft: 8 }}
                                    />
                                </View>
                            )}
                        </Pressable>
                    </ScrollView>
                </View>
            </View>
        </RNModal>
    );
};

export default SupportModal;