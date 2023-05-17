import NavLayout from "../../components/NavLayout/NavLayout";
import {HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6, FireIcon, Skeleton} from "../../assets"
import styles from "./homepage.module.css"

function Homepage() {
    return (
        <div className = {styles.homepageContainer}>
            {/* ----------------------------HERO SECTION------------------------------- */}
            <section className = {styles.heroContents}>
                <div className={styles.item}>
                    <img src= {HeroImg1} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
               
                <div className = {styles.heroText}>
                   <h3>Heroes read about heroes</h3>
                   <p>Digital marketplace for all kind of comic books, easily find and read your favorite comic hero's </p>
                   <button>View by Category</button>
                </div>
                <div className={styles.item}>
                    <img src= {HeroImg1} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src= {HeroImg3} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src= {HeroImg4} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src= {HeroImg5} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src= {HeroImg6} alt="" className = {styles.comicImg}/>
                    <div className={styles.imgText}>
                        <div className = {styles.comicName}>
                            <img src= {FireIcon} alt=""/>   
                            <p>Peaceful Rath</p>
                        </div>
                        <div className = {styles.price}>
                            <p>Price</p>
                            <p>$ 100</p>
                        </div>
                        <button>BUY</button>
                    </div>
                </div>
           </section>

            {/* -------------------------------------LATEST COMICS SECTION--------------------------- */}
            <section className = {styles.latestComicContainer}> 
                <h2>Latest Comics</h2>
                <div className = {styles.latestComic}>
                    <div className={styles.part1}>
                        <div className= {styles.latestComicImg}>
                            <img src= {Skeleton} alt=""/> 
                            <div className={styles.latestComicPrice}>
                                <div>
                                    <p>Price</p>
                                    <p className = {styles.figure}>$ 50</p>
                                </div>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className= {styles.part2}>
                        {/* <div className= {styles.latestComicDetails}> */}
                            <p id = {styles.releaseDate}>Release date: 4th April 20203 </p>
                            <h1>Dead Republic</h1>
                            <p id= {styles.description}>Description</p>
                            <p>DEADLY REPUBLIC IS BACK! BUT WHAT HAPPENS WHEN THE SCARY BEAST PLANNED TO EXECUTE THE PRESIDENT IN COLD DAY. ONE OF THE BIGGEST STATUS QUO CHANGE YEARS IS HERE</p>
                        {/* </div> */}
                    </div>
                </div>
               
                
            </section>
        
        </div>
    )
}

export default Homepage
