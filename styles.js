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
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%',
    },
    menuOverlay: {
        position: 'absolute',
        backgroundColor: 'rgba(135,47,143,0.5)',
        width: '100%',
        height: '100%',
    },
    menuButtonContainer: {
        flex: 2,
    },
    logoContainer: {
        flex: 3,
        alignItems: 'center',
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
})