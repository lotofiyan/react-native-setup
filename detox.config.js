/** Detox config for simulator-based E2E with Expo dev client.
 *
 * Build steps assume:
 * - iOS: `EXPO_USE_DEV_CLIENT=1 npx expo run:ios --configuration Debug --scheme testapp`
 * - Android: `EXPO_USE_DEV_CLIENT=1 npx expo run:android --variant debug`
 *
 * The binary paths below match Expo's defaults after the above commands.
 * Adjust them if your app name or build output differs.
 */

const os = require('os');
const path = require('path');

const derivedDataDir = path.join(os.homedir(), 'Library/Developer/Xcode/DerivedData');

function resolveIosBinaryPath() {
  const candidates = [];

  try {
    const entries = require('fs')
      .readdirSync(derivedDataDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith('testapp-'));

    for (const entry of entries) {
      const fullPath = path.join(derivedDataDir, entry.name);
      const mtime = require('fs').statSync(fullPath).mtimeMs;
      const appPath = path.join(fullPath, 'Build/Products/Debug-iphonesimulator/testapp.app');
      const infoPath = path.join(appPath, 'Info.plist');

      candidates.push({
        appPath,
        hasInfoPlist: require('fs').existsSync(infoPath),
        mtime,
      });
    }
  } catch (e) {
    // ignore and fall through
  }

  // Prefer the newest build that actually has Info.plist.
  const valid = candidates
    .filter((c) => c.hasInfoPlist)
    .sort((a, b) => b.mtime - a.mtime);

  if (valid.length > 0) {
    return valid[0].appPath;
  }

  if (!candidates.length) {
    return null;
  }

  // Fall back to the newest attempt even if Info.plist is missing so Detox error tells the user to rebuild.
  const latestAttempt = candidates.sort((a, b) => b.mtime - a.mtime)[0];
  return latestAttempt.appPath;
}

const iosBinaryPath = resolveIosBinaryPath();

module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
  },
  apps: {
    'ios.sim.debug': {
      type: 'ios.app',
      binaryPath:
        iosBinaryPath ||
        path.join(
          derivedDataDir,
          'testapp-*/Build/Products/Debug-iphonesimulator/testapp.app'
        ),
      build: 'EXPO_USE_DEV_CLIENT=1 npx expo run:ios --configuration Debug --scheme testapp --no-build-cache',
    },
    'android.emu.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'EXPO_USE_DEV_CLIENT=1 npx expo run:android --variant debug',
    },
  },
  devices: {
    'ios.sim': {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15',
      },
    },
    'android.emu': {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_6_API_34',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'ios.sim',
      app: 'ios.sim.debug',
    },
    'android.emu.debug': {
      device: 'android.emu',
      app: 'android.emu.debug',
    },
  },
};
