import { getAuth } from 'firebase/auth'
import { FirebaseOptions, initializeApp } from 'firebase/app'
import Constants from 'expo-constants'

const config: FirebaseOptions = {
    apiKey: Constants.manifest?.extra?.API_KEY,
    authDomain: Constants.manifest?.extra?.AUTH_DOMAIN,
    projectId: Constants.manifest?.extra?.PROJECT_ID,
    storageBucket: Constants.manifest?.extra?.STORAGE_BUCKET,
    messagingSenderId: Constants.manifest?.extra?.MESSAGING_SENDER_ID,
    appId: Constants.manifest?.extra?.APP_ID,
}

export const app = initializeApp(config)

export const auth = getAuth(app)
