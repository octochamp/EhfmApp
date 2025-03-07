import React from 'react';
import { View, Text, ScrollView, Pressable, Linking, Modal as RNModal } from 'react-native';
import { styles } from "../../styles";
import { SvgXml } from 'react-native-svg';

const paypalLogo = `
<svg width="256px" height="302px" viewBox="0 0 256 302" preserveAspectRatio="xMidYMid"><g><path d="M217.168476,23.5070146 C203.234077,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.3030619,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.076601 C-0.637664968,263.946149 3.13311322,268.357876 8.06925331,268.357876 L65.804612,268.357876 L80.3050438,176.385849 L79.8555471,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.46841,167.970272 C174.366398,167.970272 216.569147,146.078116 228.897012,82.7490197 C229.263268,80.8761167 229.579581,79.0531577 229.854273,77.2718188 C228.297683,76.4477414 228.297683,76.4477414 229.854273,77.2718188 C233.525163,53.8646924 229.829301,37.9325302 217.168476,23.5070146" fill="#ffffff"></path><path d="M102.396976,68.8395929 C103.936919,68.1070797 105.651665,67.699203 107.449652,67.699203 L180.767565,67.699203 C189.449511,67.699203 197.548776,68.265236 204.948824,69.4555699 C207.071448,69.7968545 209.127479,70.1880831 211.125242,70.6375799 C213.123006,71.0787526 215.062501,71.5781934 216.943728,72.1275783 C217.884341,72.4022708 218.808307,72.6852872 219.715624,72.9849517 C223.353218,74.2002577 226.741092,75.61534 229.854273,77.2718188 C233.525163,53.8563683 229.829301,37.9325302 217.168476,23.5070146 C203.225753,7.62479651 178.045612,0.815753338 145.823355,0.815753338 L52.2947379,0.815753338 C45.7104431,0.815753338 40.1083819,5.6103852 39.0762042,12.1114399 L0.136468302,259.068277 C-0.637664968,263.946149 3.13311322,268.349552 8.0609293,268.349552 L65.804612,268.349552 L95.8875974,77.5798073 C96.5035744,73.6675208 99.0174265,70.4627756 102.396976,68.8395929 Z" fill="#ffffff"></path><path d="M228.897012,82.7490197 C216.569147,146.069792 174.366398,167.970272 120.46841,167.970272 L93.0241367,167.970272 C86.4398419,167.970272 80.8794007,172.764903 79.8555471,179.265958 L61.8174095,293.621258 C61.1431644,297.883153 64.4394738,301.745495 68.7513129,301.745495 L117.421821,301.745495 C123.182038,301.745495 128.084882,297.550192 128.983876,291.864891 L129.458344,289.384335 L138.631407,231.249423 L139.222412,228.036354 C140.121406,222.351053 145.02425,218.15575 150.784467,218.15575 L158.067979,218.15575 C205.215193,218.15575 242.132193,199.002194 252.920115,143.605884 C257.423406,120.456802 255.092683,101.128442 243.181019,87.5519756 C239.568397,83.4399129 235.081754,80.0437153 229.854273,77.2718188 C229.571257,79.0614817 229.263268,80.8761167 228.897012,82.7490197 L228.897012,82.7490197 Z" fill="#ffffff"></path><path d="M216.952052,72.1275783 C215.070825,71.5781934 213.13133,71.0787526 211.133566,70.6375799 C209.135803,70.1964071 207.071448,69.8051785 204.957148,69.4638939 C197.548776,68.265236 189.457835,67.699203 180.767565,67.699203 L107.457976,67.699203 C105.651665,67.699203 103.936919,68.1070797 102.4053,68.8479169 C99.0174265,70.4710996 96.5118984,73.6675208 95.8959214,77.5881313 L80.3133678,176.385849 L79.8638711,179.265958 C80.8877248,172.764903 86.4481659,167.970272 93.0324607,167.970272 L120.476734,167.970272 C174.374722,167.970272 216.577471,146.078116 228.905336,82.7490197 C229.271592,80.8761167 229.579581,79.0614817 229.862597,77.2718188 C226.741092,75.623664 223.361542,74.2002577 219.723948,72.9932757 C218.816631,72.6936112 217.892665,72.4022708 216.952052,72.1275783" fill="#ffffff"></path></g></svg>
`

const patreonLogo = `
<svg viewBox="0 0 180 180"><path fill="#ffffff" d="M108.8135992 26.06720125c-26.468266 0-48.00213212 21.53066613-48.00213212 47.99733213 0 26.38653268 21.53386613 47.85426547 48.00213213 47.85426547 26.38639937 0 47.8530655-21.4677328 47.8530655-47.85426547 0-26.466666-21.46666613-47.99733213-47.85306547-47.99733213"></path><path fill="#ffffff" d="M23.333335 153.93333178V26.0666679h23.46666576v127.8666639z"></path></svg>
`

const SupportModal = ({ isVisible, onClose }) => {

    const handlePatreonPress = async () => {
        const url = 'https://www.patreon.com/ehfm_live';
        await Linking.openURL(url);
    };

    const handlePaypalPress = async () => {
        const url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FNHL37CAF2JDJ&source=url/';
        await Linking.openURL(url);
    };

    return (
        <RNModal visible={isVisible} animationType="slide" transparent={true} statusBarTranslucent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView>
                        {/* <Text style={styles.modalH1}>Support EHFM</Text> */}
                        <Text style={styles.modalH2}>For as little as £2.99 a month, you can help support EHFM.</Text>
                        <Text style={styles.modalBody}>EHFM is a vibrant community of creative souls who represent scenes often overlooked by mainstream media outlets. We want to amplify their voices as much as possible, and provide meaningful and paid opportunities to our hard-working volunteers who allow EHFM to operate.</Text>
                        <Text style={styles.modalBody}>Your support will provide a stable, listener-driven source of income that we can use to plan future projects, tell more local stories, pay staff for their hard work and create even more meaningful radio for you, the listener.</Text>
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
                        <Text style={styles.modalBody}>If you choose to become a subscriber, you’ll get all sorts of lovely perks such as discounts on our webstore, and a special members card that will get you into events and make you look incredibly cool.</Text>

                        <View style={{ width: '100%', alignItems: 'center', }}>
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
                        </View>
                    </ScrollView>
                    <Pressable style={styles.modalButton} onPress={onClose}>
                        <Text style={styles.modalButtonText}>CLOSE</Text>
                    </Pressable>
                </View>
            </View>
        </RNModal>
    );
};

export default SupportModal;