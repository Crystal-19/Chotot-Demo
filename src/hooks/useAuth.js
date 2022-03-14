import {useSelector} from 'react-redux'

const useAuth = () => {
  const accessToken = useSelector(state => state.Profile.accessToken)
  return accessToken
}
export default useAuth
