import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = () => {

  return (
    <div  className='app'>

        <Header/>

         <Outlet/>

        <Footer/>
    </div>
  )
}

export default Layout