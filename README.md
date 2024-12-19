### Setup

1. Install node 18 or above (LTS) https://nodejs.org/en/download

2. Install node modules: `yarn`

### Run on Android

1. Reverse TCP 8081 to access react native metro `yarn adb`
2. Clean android: `yarn clean-android`
3. Open new terminal at root folder and open metro: `yarn start`
4. Build app (debug) `npx react-native run-android`

### Run on IOS

1. Install Pods `cd ios && pod deintegrate && pod install`
2. Open XCode, clean Build folder and run app
