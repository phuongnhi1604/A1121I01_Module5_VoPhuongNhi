// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyAFLkmyCl-Oj4iODB7k2EcFgjcedqcmJ7s',
    authDomain: 'furama-image.firebaseapp.com',
    projectId: 'furama-image',
    storageBucket: 'furama-image.appspot.com',
    messagingSenderId: '382493878777',
    appId: '1:382493878777:web:30836c38b2de84385ef528',
    measurementId: 'G-VNWN0YB2CL'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
