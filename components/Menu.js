import { View, Image, ImageBackground, Text } from 'react-native';
import { styles } from "../styles";

const Menu = () => {
    return (
        <>
            <Text style={styles.menuItem}>Menu item 1</Text>
            <Text style={styles.menuItem}>Menu item 2</Text>
            <Text style={styles.menuItem}>Menu item 3</Text>
            <Text style={styles.menuItem}>Menu item 4</Text>
            <Text style={styles.menuItem}>Menu item 5</Text>
        </>
    );
};

export default Menu;