import { createContext, useContext, useEffect, useState } from 'react'
import { authApi } from '../lib/api.js'

const AuthContext = createContext(null)
const TOKEN_KEY = 'gp_token'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY) || '')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    async function init() {
      if (!token) {
        setLoading(false)
        return
      }
      try {
        const me = await authApi.me(token)
        if (active) {
          setUser(me)
        }
      } catch {
        localStorage.removeItem(TOKEN_KEY)
        if (active) {
          setToken('')
          setUser(null)
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }
    init()
    return () => {
      active = false
    }
  }, [token])

  async function login(payload) {
    const auth = await authApi.login(payload)
    localStorage.setItem(TOKEN_KEY, auth.token)
    setToken(auth.token)
    setUser(auth)
    return auth
  }

  async function register(payload) {
    const auth = await authApi.register(payload)
    localStorage.setItem(TOKEN_KEY, auth.token)
    setToken(auth.token)
    setUser(auth)
    return auth
  }

  async function logout() {
    try {
      if (token) {
        await authApi.logout(token)
      }
    } catch {
      // ignore network/logout failures for local session cleanup
    }
    localStorage.removeItem(TOKEN_KEY)
    setToken('')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        isAuthed: Boolean(token && user),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
