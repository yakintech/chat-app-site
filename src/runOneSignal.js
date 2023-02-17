import OneSignal from 'react-onesignal';

export async function runOneSignal() {
    await OneSignal.init({ appId: 'c10e0f90-5ed0-41f5-8fa7-8a28daf68217'});
    OneSignal.showSlidedownPrompt();
  }