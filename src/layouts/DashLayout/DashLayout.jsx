import { NavLink, Outlet } from 'react-router-dom'
import Dash from './DashLayout.module.css'
import { Cross, Good, Jay, Refresh, Send } from '../../assets'

const DashLayout = () => {
  return (
    <div className={Dash.wrapper}>
        <nav>
          <div className={Dash.ash}>
                <main>
                <img src = {Jay} />
              <h2>Welcome Back!</h2>
              <p>James Okoye</p>
                </main>
              <div className={Dash.click}>
              <button className={Dash.btn}>
                <small>Cert</small>
                <p>23</p>
              </button>
              <button className={Dash.btno}>
                <small>Downloaded</small>
                <p>10</p>
              </button>
              </div>
          </div>
          <ul className={Dash.list}>
            <div>
              <img src = {Cross} alt = 'colle' />
            <NavLink to=''>Collections</NavLink>
            </div>
            <div>
            <img src = {Good} alt = 'save' />
            <NavLink to='#'>Saved</NavLink>
            </div>
            <div>
            <img src = {Refresh} alt = 'refresh' />
            <NavLink to='#'>History</NavLink>
            </div>
            <div>
              <img src ={Send}  alt='logOut'/>
            <NavLink to='#'>Logout</NavLink>
            </div>

          </ul>
        </nav>
       
        <main className={Dash.Main}>
            <Outlet />
        </main>
    </div>
  )
}

export default DashLayout