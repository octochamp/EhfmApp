import { StyleSheet } from "react-native";

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

    header: {

    },
    headerContainer: {
        flex: 1,
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

    footer: {

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
    },
    playingNext: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        columnGap: 5,
        // flex: 1,
        // flexShrink: 1,
        flexWrap: 'wrap',
    },
    playingNowSchedule: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 5,
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

    bodyText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 18,
        // padding: 15,
    },
    nowTimeText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '200',
        fontSize: 32,
    },
    nowTitleText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '800',
        fontSize: 32,
    },
    nextTimeText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '200',
        fontSize: 20,
    },
    nextTitleText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '800',
        fontSize: 20,
    },
})