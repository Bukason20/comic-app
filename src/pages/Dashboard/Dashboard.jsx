import React from 'react'
import Dashy from './Dashboard.module.css'
import { Action, Adult, Akutars, Crown, Fiction, Planet, Romance, lifestyle } from '../../assets'
import Author from '../../components/Dashboard/Author'

const Dashboard = () => {
  return (
    <div className={Dashy.wrapper}>
        <h1>Books you just bought</h1>
        <div className={Dashy.imag}>
            <img src = {Akutars} alt ='akutars' />
            <img src = {Crown} alt ='fiction' />
        </div>
        <section >
          <h2>New Release</h2>
            <div className={Dashy.picture}>
            <main>
                <div  className={Dashy.image}>
                <div><img src = {Romance} alt ='fiction' /></div>
                <div><img src = {Adult} alt ='fiction' /></div>
                <div><img src = {Fiction} alt ='fiction' /></div>
                </div>
                <div className={Dashy.image}>
                <div><img src = {Action} alt ='fiction' /></div>
                <div><img src = {lifestyle} alt ='fiction' /></div>
                <div><img src = {Planet} alt ='fiction' /></div>
                </div>
            </main>
            <aside>
              <Author />
            </aside>
            </div>
        </section>
    </div>
  )
}

export default Dashboard