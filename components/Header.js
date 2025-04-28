import { View, Pressable } from 'react-native';
import Svg, { Rect, Circle } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';
import { styles } from "../styles";
import { useState } from 'react';
import { ehfmLogo, menuButton, menuCloseButton } from '../assets/vectors/Vectors'

const Header = ({ menuVisible, setMenuVisibility }) => {
    const menuOrCloseButton = () => {
        if (menuVisible) {
            const button = <SvgXml xml={menuCloseButton} height="150" width="33" viewBox='0 0 273 273' />;
            console.log(button);
            return button;
        } else {
            const button = <SvgXml xml={menuButton} height="150" width="33" viewBox='0 0 273 273' />;
            console.log(button);
            return button;
        }
    };
    return (
        <>
            <View style={styles.menuButtonContainer} >
                <Pressable onPress={() => setMenuVisibility(!menuVisible)}>
                    {menuOrCloseButton()}
                </Pressable>
            </View >
            <View style={styles.logoContainer}>
                <SvgXml
                    xml={ehfmLogo}
                    height="150"
                    width="150"
                    viewBox="0 0 529 273"
                />
            </View>
            <View style={styles.menuButtonContainer} >
            </View>
        </>
    );
};

export default Header;