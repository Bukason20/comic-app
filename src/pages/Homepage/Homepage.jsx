import NavLayout from "../../components/NavLayout/NavLayout";
import {HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6, FireIcon, Skeleton, NewLabel, Category1,
Category2, Category3, Category4, Category5, Category6, Category7, Category8, BestSelling, CurvyArrow, LabelTop} from "../../assets"
import styles from "./homepage.module.css"
import Button from "../../components/Button/Button";

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
                    <img src= {HeroImg2} alt="" className = {styles.comicImg}/>
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

            {/*------------------------------------------------COMIC TYPE----------------------------  */}
            <section className = {styles.comicType}>
                <p>Kid comics</p>
                <p>Latest comics</p>
                <p>Adventure</p>
                <p>New comics</p>
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
                            <p id = {styles.comicDesc}>DEADLY REPUBLIC IS BACK! BUT WHAT HAPPENS WHEN THE SCARY BEAST PLANNED TO EXECUTE THE PRESIDENT IN COLD DAY. ONE OF THE BIGGEST STATUS QUO CHANGE YEARS IS HERE</p>
                            <div className={styles.newLabel}>
                                <img src= {NewLabel} alt=""/>
                                <p>NEW</p>
                            </div>
                            
                        {/* </div> */}
                    </div>
                </div>
               
                
            </section>

            {/* -----------------------------------------------CATEGORY SECTION-------------------------------------------------- */}
            <section className = {styles.categoryContainer}>
                <h2>Search by Category</h2>

                <div className={styles.categories}>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category1} alt=""/>
                        <p id ={styles.categoryText}>Romance</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div> 
                        <img src= {Category2} alt=""/>
                        <p>Adult</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category3} alt=""/>
                        <p>Fiction</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category4} alt=""/>
                        <p>Sci-Fi</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category5} alt=""/>
                        <p>Action</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category6} alt=""/>
                        <p>Lifestyle</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category7} alt=""/>
                        <p>Planet</p>
                    </div>
                    <div className={styles.category}>
                        <div className={styles.categoryOverlay}></div>
                        <img src= {Category8} alt=""/>
                        <p>Imagination</p>
                    </div>
                </div>
            </section>
        
            {/* -----------------------------------------------------BEST SELLING COMIC CATEGORY---------------------------- */}
            <section className = {styles.bestSellingContainer}>
                <h2>Best selling comics</h2>
                <div className= {styles.bestSellers}>
                    <div className = {styles.bestSellerFilters}>
                        <p>Filter by</p>
                        <p>Series</p>
                        <p>Character</p>
                        <p>Reading list</p>
                        <p>All comics</p>
                        <button>See more</button>
                    </div>
                    <div className={styles.bestSelling}>
                        <img src= {BestSelling} alt=""/>
                    </div>
                    <div className={styles.bestSelling}>
                        <img src= {BestSelling} alt=""/>
                    </div>
                    <div className={styles.bestSelling}>
                        <img src= {BestSelling} alt=""/>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------SUBSCRIBE SECTION------------------------------------------ */}
            <section className = {styles.subscribeContainer}>
                <div className= {styles.updates}>
                    <img src= {NewLabel} alt="" id = {styles.updateLabel}/>
                    {/* <img src= {LabelTop} alt="" id = {styles.labelOverlay}/> */}
                    <p>All Updates</p>
                </div>
                
                <div className= {styles.subscribeText}>
                    <p id= {styles.subscribe}>Subscribe to our</p>
                    <p id= {styles.newsletter}>Newsletter</p>
                    <p>Be the first to get updates and access early bird coupon</p>

                    <form className = {styles.subscribeForm}>
                        <input type= "email" placeholder = "Give us your email"/>
                        <button type = "submit">Send</button>
                    </form>
                </div>

                <img src= {CurvyArrow} alt="" id = {styles.curvyArrow}/>
            </section>
        </div>
    )
}

export default Homepage
