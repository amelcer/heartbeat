import React from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import app from '../firebaseConfig'

const auth = getAuth(app)

export function useAuth() {
    const [user, setUser] = React.useState<User>()

    React.useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser || undefined)
        })

        return unsubscribeFromAuthStatuChanged
    }, [])

    return {
        user,
    }
}
