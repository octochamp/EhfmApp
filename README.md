Mobile Android/iOS app for Edinburgh community radio station [EHFM](https://ehfm.live). 
# Build notes
- ## react-native-track-player issue
    - https://github.com/doublesymmetry/react-native-track-player/pull/2451
    - until this pull request is accepted then need to do a manual fix in `node_modules/react-native-track-player/android/src/main/java/com/doublesymmetry/trackplayer/service/MusicService.kt`
    - `763`
        - `@MainThread`
        - `    override fun onBind(intent: Intent?): IBinder {`
        - `return binder`
        - `}`

# Todo
- ## Bug fixes
    - Fix menu items disappearing when horizontal
- ## Additional features
    - chat integration (_if possible?_) or link
    - pull in daily schedule
- ## iOS version
    - currently haven't tested anything with iOS
