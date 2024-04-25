import { View, Image, ImageBackground, Text } from 'react-native';
import { styles } from "../styles";

const Overlay = ({ children }) => {
    return (
        <View style={styles.overlayTint}>
            {children}
        </View>
    );
};

export default Overlay;