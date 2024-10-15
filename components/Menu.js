import { View, Text, Pressable } from 'react-native';
import { styles } from "../styles";

import AboutModal from './Modals/AboutModal';
import ListenBackModal from './Modals/ListenBackModal';
import ScheduleModal from './Modals/ScheduleModal';
import SupportModal from './Modals/SupportModal';
import ModalBackground from './Modals/ModalBackground';

import { useState } from 'react';

const Menu = () => {
    const [aboutIsVisible, setAboutIsVisible] = useState(false);
    const [listenBackIsVisible, setListenBackIsVisible] = useState(false);
    const [scheduleIsVisible, setScheduleIsVisible] = useState(false);
    const [supportIsVisible, setSupportIsVisible] = useState(false);
    const [modalBackgroundIsVisible, setModalBackgroundIsVisible] = useState(false);

    // SORRY! Hacky quick way to wash out background by calling another modal which fades in at the same time as calling the actual modal which slides on over the top

    const modalPressed = (modal) => {
        setModalBackgroundIsVisible(true);

        switch (modal) {
            case 'about':
                setAboutIsVisible(true);
                break;
            case 'listenback':
                // Additional logic for listenback if needed
                setListenBackIsVisible(true);
                break;
            case 'schedule':
                // Additional logic for schedule if needed
                setScheduleIsVisible(true);
                break;
            case 'support':
                // Additional logic for support if needed
                setSupportIsVisible(true);
                break;
            default:
                console.warn('Unknown modal type');
        }
    };

    const modalClosed = (modal) => {
        setModalBackgroundIsVisible(false);

        switch (modal) {
            case 'about':
                setAboutIsVisible(false);
                break;
            case 'listenback':
                // Additional logic for listenback if needed
                setListenBackIsVisible(false);
                break;
            case 'schedule':
                // Additional logic for schedule if needed
                setScheduleIsVisible(false);
                break;
            case 'support':
                // Additional logic for support if needed
                setSupportIsVisible(false);
                break;
            default:
                console.warn('Unknown modal type');
        }
    }

    return (
        <>
            <Pressable onPress={() => modalPressed('about')}>
                <Text style={styles.menuItem}>About</Text>
            </Pressable>
            <Pressable onPress={() => modalPressed('listenback')}>
                <Text style={styles.menuItem}>Listen back</Text>
            </Pressable>
            <Pressable onPress={() => modalPressed('schedule')}>
                <Text style={styles.menuItem}>Schedule</Text>
            </Pressable>
            <Pressable onPress={() => modalPressed('support')}>
                <Text style={styles.menuItem}>Support EHFM</Text>
            </Pressable>

            {modalBackgroundIsVisible && <ModalBackground onClose={() => setModalBackgroundIsVisible(false)} />}
            {aboutIsVisible && <AboutModal onClose={() => modalClosed('about')} />}
            {listenBackIsVisible && <ListenBackModal onClose={() => modalClosed('listenback')} />}
            {scheduleIsVisible && <ScheduleModal onClose={() => modalClosed('schedule')} />}
            {supportIsVisible && <SupportModal onClose={() => modalClosed('support')} />}
        </>
    );
};

export default Menu;
