import { StyleSheet } from "react-native";
import RadioPlayer from "./components/RadioPlayer";

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
        justifyContent: 'space-between',
    },

    header: {

    },
    headerContainer: {
        width: '100%',
        height: '20%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuButton: {
        flex: 1,
        paddingLeft: 15,
    },
    logo: {
        flexGrow: 2,
    },

    footer: {

    },
    footerContainer: {
        // backgroundColor: 'rgba(255,255,255,0.3',
        padding: 20,
        flexDirection: 'row-reverse',
        // justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    radioPlayer: {
        maxHeight: '50%',
        width: '33%',
    },
    playerButton: {
        // height: '100%',
        // width: '100%',
    },

    schedule: {
        flexDirection: 'column-reverse',
        flexGrow: 1,
        height: '100%',
    },

    bodyText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 18,
        // padding: 15,
    },
    timeText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '200',
        fontSize: 36,
    },
    showTitleText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: '800',
        fontSize: 24,
    },
})