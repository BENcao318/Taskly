import serverAPI from './useAxios'

const useAuth = () => {
  const signIn = (user) => {
    return serverAPI.post('/users/signin', user)
  }

  const signOut = () => {
    return serverAPI.get('/users/signout')
  }

  return {
    signIn,
    signOut,
  }
}

export default useAuth

// export function AuthProvider({ children }) {
//   const auth = useAuth()

//   return <authContext.Provider value={auth}>{children}</authContext.Provider>
// }

// export default function AuthConsumer() {
//   return React.useContext(authContext)
// }
