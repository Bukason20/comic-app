import NavLayout from "../../components/NavLayout/NavLayout";
import {HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6} from "../../assets"
import styles from "./homepage.module.css"

function Homepage() {
    return (
        <div className = {styles.homepageContainer}>
            <section className = {styles.heroContents}>
                <div className={styles.heroImg}>
                    <img src= {HeroImg1} alt="" id = {styles.item1}/>
                    <div className={styles.imgText}>

                    </div>
                </div>
               
                <div className = {styles.heroText}>
                   <h3>Heroes read about heroes</h3>
                   <p>Digital marketplace for all kind of comic books, easily find and read your favorite comic hero's </p>
                   <button>View by Category</button>
                </div>
                <div className={styles.heroImg}>
                    <img src= {HeroImg2} alt="" id = {styles.item1}/>
                </div> <div className={styles.heroImg}>
                    <img src= {HeroImg3} alt="" id = {styles.item1}/>
                </div> <div className={styles.heroImg}>
                    <img src= {HeroImg4} alt="" id = {styles.item1}/>
                </div> <div className={styles.heroImg}>
                    <img src= {HeroImg5} alt="" id = {styles.item1}/>
                </div> <div className={styles.heroImg}>
                    <img src= {HeroImg6} alt="" id = {styles.item1}/>
                </div>
           </section>
        </div>
    )
}

export default Homepage
