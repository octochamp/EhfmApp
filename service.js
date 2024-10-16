/**
* This is the code that will run tied to the player.
*
* The code here might keep running in the background.
*
* You should put everything here that should be tied to the playback but not the UI
* such as processing media buttons or analytics
*/
 
import TrackPlayer, { Event } from 'react-native-track-player';
 
module.exports = async function() {
 TrackPlayer.addEventListener(Event.RemotePlay, () => {
   TrackPlayer.play();
 });
 
 TrackPlayer.addEventListener(Event.RemotePlay, () => {
   TrackPlayer.pause();
 });
 
};