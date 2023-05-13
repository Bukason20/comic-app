import React from 'react'
import Auth from './Author.module.css'

const Author = () => {
  return (
    <div className={Auth.wrapper}>
    <div className={Auth.wrap}>
    <h3>Famous authors</h3>  
    <div>
        <main>
          <div className={Auth.wrappy}>  
            <div className={Auth.circle} style={{backgroundColor: '#0554F2'}}></div>   
            <div>
            <h4>James Okoye</h4>
            <p>150 Comics</p>
            </div> 
        </div>  
          <div className={Auth.wrappy}>  
            <div className={Auth.circle} style={{backgroundColor: '#F08232'}}></div>   
            <div>
            <h4>Daniel Acherman</h4>
            <p>20 Comics</p>
            </div> 
        </div>  
          <div className={Auth.wrappy}>  
            <div className={Auth.circle} style={{backgroundColor: '#34A853'}}></div>   
            <div>
            <h4>Idowu Akinde</h4>
            <p>10 Comics</p>
            </div> 
        </div>  
    </main>  
    </div>
    </div>
    </div>
  )
}

export default Author