import { View, Image, ImageBackground, Text } from 'react-native';
import { styles } from "../styles";
import LinearGradient from 'react-native-linear-gradient';

const Overlay = ({ children }) => {
    return (
        <View style={styles.overlayTint}>
            <LinearGradient colors={['rgba(0,179,152,0)', 'rgba(0,179,152,0.9)']} start={{ x: 0, y: .35 }} end={{ x:0, y:0.9 }} style={styles.overlayGradient}>
                {children}
            </LinearGradient>
        </View>
    );
};

export default Overlay;