import { auth } from 'src/library/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Schedule } from 'src/library/db/schedule/schema'
import { scheduleCollection } from '../../library/db/schedule/collection'

export default async function getUserSchedules(): Promise<Schedule[]> {
    if (!auth.currentUser?.uid) return Promise.reject(new Error('No uuid'))

    const schedulesRef = doc(scheduleCollection, auth.currentUser.uid)

    try {
        const scheduleSnap = await getDoc(schedulesRef)
        if (!scheduleSnap.exists()) return await Promise.resolve([])
        // return await Promise.resolve({
        //     id: 'string',
        //     userId: 'string',
        //     startDate: new Date(),
        //     repeat: null,
        //     medicines: [],
        // })

        return [scheduleSnap.data()]
    } catch (e) {
        return Promise.reject(e)
    }
}
