import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { fetchAuth } from '../store/ducks/user/action'
import { selectUserData } from '../store/ducks/user/selectors'

const Layout = ({children}: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAuth())
  }, [])

  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout