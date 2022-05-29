import React from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebaseConfig'

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
