import { View, Text, Pressable } from 'react-native';
import { styles } from "../styles";

import AboutModal from './Modals/AboutModal';
import ListenBackModal from './Modals/ListenBackModal';
import ScheduleModal from './Modals/ScheduleModal';
import SupportModal from './Modals/SupportModal';
import ReportModal from './Modals/ReportModal';
import ModalBackground from './Modals/ModalBackground';

import { useState } from 'react';

const Menu = () => {
    const [aboutIsVisible, setAboutIsVisible] = useState(false);
    const [listenBackIsVisible, setListenBackIsVisible] = useState(false);
    const [scheduleIsVisible, setScheduleIsVisible] = useState(false);
    const [supportIsVisible, setSupportIsVisible] = useState(false);
    const [reportIsVisible, setReportIsVisible] = useState(false);
    const [modalBackgroundIsVisible, setModalBackgroundIsVisible] = useState(false);

    // SORRY! Hacky quick way to wash out background by calling another modal which fades in at the same time as calling the actual modal which slides on over the top

    const modalPressed = (modal) => {
        setModalBackgroundIsVisible(true);

        switch (modal) {
            case 'about':
                setAboutIsVisible(true);
                break;
            case 'listenback':
                setListenBackIsVisible(true);
                break;
            case 'schedule':
                setScheduleIsVisible(true);
                break;
            case 'support':
                setSupportIsVisible(true);
                break;
            case 'report':
                setReportIsVisible(true);
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
            case 'report':
                // Additional logic for support if needed
                setReportIsVisible(false);
                break;
            default:
                console.warn('Unknown modal type');
        }
    }

    return (
        <>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }]} onPress={() => modalPressed('about')}>
                {({ pressed }) => (<Text style={[{ color: pressed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,1)' }, styles.menuItem]}>About</Text>)}
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }]} onPress={() => modalPressed('listenback')}>
                {({ pressed }) => (<Text style={[{ color: pressed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,1)' }, styles.menuItem]}>Listen back</Text>)}
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }]} onPress={() => modalPressed('schedule')}>
                {({ pressed }) => (<Text style={[{ color: pressed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,1)' }, styles.menuItem]}>Schedule</Text>)}
            </Pressable>
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }]} onPress={() => modalPressed('support')}>
                {({ pressed }) => (<Text style={[{ color: pressed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,1)' }, styles.menuItem]}>Support EHFM</Text>)}
            </Pressable>

            {/*!!!!!!!!!!!!!!!!!!!!!! BELOW IS FOR APP BETA ONLY!!!! */}
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)' }]} onPress={() => modalPressed('report')}>
                {({ pressed }) => (<Text style={[{ color: pressed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.5)' }, styles.menuItem]}>Report app issues</Text>)}
            </Pressable>

            {modalBackgroundIsVisible && <ModalBackground onClose={() => setModalBackgroundIsVisible(false)} />}
            {aboutIsVisible && <AboutModal onClose={() => modalClosed('about')} />}
            {listenBackIsVisible && <ListenBackModal onClose={() => modalClosed('listenback')} />}
            {scheduleIsVisible && <ScheduleModal onClose={() => modalClosed('schedule')} />}
            {supportIsVisible && <SupportModal onClose={() => modalClosed('support')} />}
            {reportIsVisible && <ReportModal onClose={() => modalClosed('report')} />}
        </>
    );
};

export default Menu;
