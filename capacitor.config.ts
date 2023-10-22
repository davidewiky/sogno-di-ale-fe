import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stafford.vite.capacitor',
  appName: 'sogno-di-ale-fe',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
