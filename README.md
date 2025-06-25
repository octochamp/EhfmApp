Mobile Android/iOS app for Edinburgh community radio station [EHFM](https://ehfm.live). 
# Build notes
- ## ~react-native-track-player issue~
    - _**the pull request has been accepted so the below is (probably) irrelevant now**_
    - ~https://github.com/doublesymmetry/react-native-track-player/pull/2451~
    - ~until this pull request is accepted then need to do a manual fix in `node_modules/react-native-track-player/android/src/main/java/com/doublesymmetry/trackplayer/service/MusicService.kt`~
    - ~`763`~
        - ~`@MainThread`~
        - ~`    override fun onBind(intent: Intent?): IBinder {`~
        - ~`return binder`~
        - ~`}`~

# Todo
- ## Bug fixes
    - Fix menu items disappearing when horizontal
    - Allow the header image and button to change colour depending on the background so we don't lose it against bright images
- ## Additional features
    - maybe chat integration or just a link to Chatango

