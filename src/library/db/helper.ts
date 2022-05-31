import { CollectionReference, DocumentData, collection } from 'firebase/firestore'
import { firestore } from '../firebaseConfig'

export const createCollection = <T = DocumentData>(collectionName: string) =>
    collection(firestore, collectionName) as CollectionReference<T>
