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
        backgroundColor: 'rgba(0,179,152,0.7)',
    },
    header: {
        width: '100%',
        height: '20%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    menuButton: {
        flex: 1,
        paddingLeft: 15,
    },
    logo: {
        flexGrow: 2,
    },
    bodyText: {
        color: 'rgba(255,255,255,1)',
        fontSize: 18,
        padding: 15,
    }
})