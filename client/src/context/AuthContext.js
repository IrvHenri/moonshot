import {useState, useContext, createContext} from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = props => {
  const [user, setUser] = useState("test")
  return <AuthContext.Provider value={{user, setUser}}>
    {props.children}
  </AuthContext.Provider>
}