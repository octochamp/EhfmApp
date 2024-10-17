import { StyleSheet } from "react-native";
import ModalBackground from "./components/Modals/ModalBackground";

export const styles = StyleSheet.create({
    backgroundImageContainer: {
        flex: 1,
        justifyContent: 'center',
        position: 'fixed',
    },
    backgroundImage: {
        flex: 1,
        opacity: 1,
    },
    overlayTint: {
        flex: 1,
        backgroundColor: 'rgba(0,179,152,0)',
    },
    overlayGradient: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        // padding: '5%',
    },
    headerMenuContainer: {
        flex: 1,
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%',
    },
    menuButtonContainer: {
        flex: 2,
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
    },
    menuOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    menu: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingLeft: '5%',
        gap: 10,
    },
    menuItem: {
        fontSize: 18,
        fontWeight: '400',
/*         Colour is determined by the pressed state of the pressable */
        /* color: 'rgba(255,255,255,1)', */
    },


    footerContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column-reverse',
        // justifyContent: 'flex-end',
        rowGap: 10,
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '4%',
    },

    playingNow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        flexGrow: 1,
        flex: 1,
        // columnGap: 5,
    },
    playingNext: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        columnGap: 5,
        // flex: 1,
        // flexShrink: 1,
        flexWrap: 'wrap',
    },
    playingNowSchedule: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex: 2,
    },
    radioPlayer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    playerButton: {
        width: '80%',
        maxHeight: 120,
    },
    playerButtonContainer: {
        width: '100%',
        height: '100%',
    },
    bodyText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 18,
        // padding: 15,
    },
    nowText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 32,
    },
    nowTimeText: {
        fontWeight: '200',
    },
    nowTitleText: {
        fontWeight: '800',
    },
    nowDescriptionText: {
        fontWeight: '200',
        fontSize: 18,
    },
    nextText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 18,
    },
    nextTimeText: {
        fontWeight: '200',
    },
    nextTitleText: {
        fontWeight: '800',
    },
    nextRepeatText: {
        fontWeight: '200',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '5%',
        paddingVertical: '4%',
        paddingHorizontal: '8%',
        borderRadius: 8,
        alignSelf: 'center',  // Makes the button shrink to content
    },

    buttonText: {
        fontSize: 20,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    modalBackgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,179,152,0.7)',
    },
    modalContent: {
        width: '80%',
        maxHeight: '80%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    modalH1: {
        fontSize: 28,
        color: 'rgb(0,179,152)',
        paddingVertical: '2%',
        lineHeight: 34,
    },
    modalH2: {
        fontSize: 20,
        color: 'rgb(0,179,152)',
        paddingVertical: '2%',
        lineHeight: 24,
    },
    modalBody: {
        fontSize: 14,
        color: 'black',
        paddingVertical: '2%',
        lineHeight: 20,
    },
    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '4%',
        color: 'black',
    },
    modalButtonText: {
        color: 'rgb(0,0,0)',
    }
})