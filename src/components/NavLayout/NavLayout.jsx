import React from 'react'
import { User, Logo, House, Search, Squad } from '../../assets'
import { Outlet } from 'react-router-dom'
import Navy from './NavLayout.module.css'

const NavLayout = () => {
  return (
    <div>
         <nav className = {Navy.wrapper}>
            <div>
            <img src={Logo} alt= 'logo' />
            </div>
            <div className={Navy.Flex}>
                <input type="text" placeholder ='Search comics' />
                <img src={Search} alt= 'search' height={25}/>
            </div>
            <figure>
            <img src={House} alt= 'home' height={25} />
            <img src={User} alt= 'user' height={25}/> 
            </figure>
            <img src={Squad} alt= 'squad' />     
        </nav>  
        <main>
        <Outlet />    
        </main> 
    </div>
  )
}

export default NavLayout