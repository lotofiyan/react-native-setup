# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Tests

- Component/unit: `npm test`
- Visual regression: start Expo Web (`npm run web`) then run `npm run argos:snap` (screenshots land in `__argos__`, upload with `npm run argos:upload`).
- End-to-end regression (web): start Expo Web so `http://localhost:19006` is reachable, then run `npm run test:e2e`. Override the target with `APP_URL=http://your-host:port npm run test:e2e`.
- End-to-end regression (simulator, Detox + Expo dev client):
  - Install CLI deps once: `npm install -g detox-cli` and make sure you have Xcode Simulator and/or Android emulator available.
  - Add native projects/dev client: `EXPO_USE_DEV_CLIENT=1 npx expo prebuild` (one time) then build the dev client:
    - iOS: `npm run e2e:ios:build` (uses `expo run:ios --configuration Debug --scheme testapp` under the hood).
    - Android: `npm run e2e:android:build` (uses `expo run:android --variant debug`).
  - With a simulator/emulator running, execute `npm run e2e:ios:test` or `npm run e2e:android:test`.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Local installations

- Install it via Homebrew:
  brew tap wix/brew
  brew install applesimutils
- Then verify: applesimutils --version
  should print something like: applesimutils 0.x.y

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
