import React from 'react'
import './MainComponentsCss.css'
import Navbar from './Navbar'
import HomePageBannerImage2 from '../Assets/HomePage/home-page-banner-image2.webp'
import HomePageBannerImage1 from '../Assets/HomePage/cooking-banner-7166200__340.jpg'
import HomePageFreshFromOurCommunityAvatarImage1 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image1.webp'
import HomePageFreshFromOurCommunityAvatarImage2 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image2.jpeg'
import HomePageFreshFromOurCommunityAvatarImage3 from '../Assets/HomePage/home-page-fresh-from-our-community-avatar-image3.jpg'
import HomePageFreshFromOurCommunityImage1 from '../Assets/HomePage/home-page-fresh-from-our-community-image1.webp'
import HomePageWhatWereCravingImage1 from '../Assets/HomePage/home-page-what-were-craving-image1.webp'
import HomePageWhatWereCravingImage2 from '../Assets/HomePage/home-page-what-were-craving-image2.webp'
import HomePageWhatWereCravingImage3 from '../Assets/HomePage/home-page-what-were-craving-image3.webp'
import HomePageTrendingImage1 from '../Assets/HomePage/home-page-trending-now-image1.webp'
import HomePageTrendingImage2 from '../Assets/HomePage/home-page-trending-now-image2.webp'
import HomePageTrendingImage3 from '../Assets/HomePage/home-page-trending-now-image3.webp'


import { FiHeart } from 'react-icons/fi'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div id='home-page'>
                <div id='home-page-container'>
                    <div id='home-page-banner-image1-container'>
                        <img src={HomePageBannerImage1} alt='home-page-banner' id='home-page-banner-image1'></img>
                    </div>
                    <div id='home-page-banner-image1-text-and-button'>
                        <h2>Only Quality Food<br /></h2><h4> Send us persity under omnis iste natus error sit valuptatern accusantium dolemrque<br/> laudantium totarm rem aperium aeaur ispw ab lii uingdh hbshwnj bjwj gyj ijftuwg uhow iojt bhgfswhb<br/>ygws i crd gtvscghv jkjs v vfhsv hgh yws n& hug hjbwxbd ikxn kj</h4>
                        <button onClick={() => navigate('/recipes/chicken')}>VIEW MENU</button>_
                        
                        <button onClick={() => navigate('/recipes/chicken')}>RESERVATION</button>
                    </div>
                    <hr />
                    
                    <div id='home-page-banner-image2-container'>
                           
                            <div>
                                <h5>OUR STORY</h5>
                                <h3>Welcome To Royal</h3>
                                <p>A forerunner of the modern restaurant is the<br/>thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of <br /> peach! Here are three ways to get the <br /> job done.</p>
                            </div>

                            <img src={HomePageBannerImage2} alt=''></img>
                        </div>
                    
                        <div id='home-page-fan-favourites'>
                            <h2>Fresh Ingredient,Tasty Meals</h2>
                            <div id='home-page-fan-favourites-container'>
                           <p id=''>Early eating establishments recognizable as restaurants in the modern sense emerged in Song dynasty China during the 11th and 12th <br/> centuries. In large cities, such as Kaifeng and Hangzhou, food catering establishments catered to merchants who travelled between cities. Probably growing out of tea houses and taverns which catered larger and more opulent of these establishments offered a dining experience similar to modern restaurant culture.<br/> According to a Chinese manuscript from 1126, patrons of one such establishment were gre</p>
                           <div id='home-page-banner-image1-text-and-button-bottom'>
                           <hr/>
                        
                        </div>   
                        <button onClick={() => navigate('/recipes/chicken')}>VIEW MENU</button>
                            </div>
                        </div>

                    <div id='home-page-what-were-craving'>
                        
                        <div id='home-page-what-were-craving-container'>
                            <Link to='/recipes/trending now'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container'>
                                        <img src={HomePageWhatWereCravingImage1} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>FREEZER-FRIENDLY <br /> MEALS</h3>
                                </div>
                            </Link>
                            <Link to='/recipes/lunch'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container'>
                                        <img src={HomePageWhatWereCravingImage2} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>LUNCH IDEAS FOR <br /> KIDS</h3>
                                </div>
                            </Link>
                            <Link to='/recipes/healthy'>
                                <div>
                                    <div className='home-page-what-were-craving-image-container' s>
                                        <img src={HomePageWhatWereCravingImage3} alt=''></img>
                                    </div>
                                    <h5>COLLECTION</h5>
                                    <h3>BEST CORN <br /> RECIPES</h3>
                                </div>
                            </Link>
                            
                            <br></br>
                            
                        </div>
                    </div>

                    <div id='home-page-fresh-from-our-community'>
                        <h2>FRESH FROM OUR COMMUNITY</h2>
                        <div id='home-page-fresh-from-our-community-cards-container'>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage1} alt='avatar'></img>
                                    <h4>providentecopolitanflats asked a question about Birria</h4>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>nice loved it</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>59 MINUTES AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage2} alt='avatar'></img>
                                    <h4>Lily R. reviewed Thai Noodles With Spicy Peanut Sauce</h4>
                                </div>
                                <p className='home-page-fresh-from-our-community-cards-review'>Always delicious. 2nd time I've made this.<br /> It's a treat hot, warm, or cold</p>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>5 HOURS AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                            <div className='home-page-fresh-from-our-community-cards'>
                                <div className='home-page-fresh-from-our-community-cards-image-text'>
                                    <img src={HomePageFreshFromOurCommunityAvatarImage3} alt='avatar'></img>
                                    <h4>pate g. added a photo to Salted Peanut Chews</h4>
                                </div>
                                <img src={HomePageFreshFromOurCommunityImage1} alt='' id='home-page-fresh-from-our-community-cards-image1'></img>
                                <div className='home-page-fresh-from-our-community-cards-time-reply'>
                                    <p>11 HOURS AGO</p>
                                    <p>REPLY <FiHeart className='home-page-fresh-from-our-community-cards-time-reply-heart' /></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='home-page-explore-more'>
                    
                            
                        <hr />
                        <div id='home-page-trending-now'>
                            <h4 id='middle'>DON'T MISS</h4>
                            <h2>Our News And Events</h2>
                            <h4 id='center'><p>sgxjvd wgdjewvd yiggdb dyuwgd i v gdbqwhgdkwqd ghbdh yidbdbwqjdbheq ui <br/> hduwe dewufjkewfewnj edjhwendj ekbk</p></h4>
                            <div id='home-page-trending-now-container'>
                                <div>
                                    <img src={HomePageTrendingImage1} alt=''></img>
                                    <h3>PINEAPPLE ZUCCHINI <br /> BREAD</h3>
                                    <h5>ugfjebkfj wediefhguew dhwjdg ohujwd oud idkbwjegwd weidkew duoyhdjn duowdj edik duhhde uidh duij wdiudkj wduidkb wfu igyiskw sgygikdb wgitdgw dytgikq2 guyk jdwldyhlj huotd ujho dwuojhdn gi dhuoh ohjwhd hndwyg uyhbdiw hjnowdjn djwh dwidkjwbd whcdjl weguwekj wchuwjlwh hochwco chou jewhc ujochnscij cujch cohch cucjhbuco chbcnoujch coucjhcnuoc jhcncuoj chncojch bncjoc ubcjo chuhojbujbcuojchbuocj c uhjcbocj kcoujc hucjhwcnjc cuwoc hcujcn cjhcnuoc hcuojc hcocjh cocj </h5>
                                </div>
                                <div>
                                    <img src={HomePageTrendingImage2} alt=''></img>
                                    <h3>SPICY BROCCOLI- <br /> CHEDDAR SOUP</h3>
                                    <h5>ugfjebkfj wediefhguew dhwjdg ohujwd oud idkbwjegwd weidkew duoyhdjn duowdj edik duhhde uidh duij wdiudkj wduidkb wfu igyiskw sgygikdb wgitdgw dytgikq2 guyk jdwldyhlj huotd ujho dwuojhdn gi dhuoh ohjwhd hndwyg uyhbdiw hjnowdjn djwh dwidkjwbd whcdjl weguwekj wchuwjlwh hochwco chou jewhc ujochnscij cujch cohch cucjhbuco chbcnoujch coucjhcnuoc jhcncuoj chncojch bncjoc ubcjo chuhojbujbcuojchbuocj c uhjcbocj kcoujc hucjhwcnjc cuwoc hcujcn cjhcnuoc hcuojc hcocjh cocj </h5>

                                </div>
                                <div>
                                    <img src={HomePageTrendingImage3} alt=''></img>
                                    <h3>QUICK & EASY CHICKEN <br /> ENCHILADAS</h3>
                                    <h5>ugfjebkfj wediefhguew dhwjdg ohujwd oud idkbwjegwd weidkew duoyhdjn duowdj edik duhhde uidh duij wdiudkj wduidkb wfu igyiskw sgygikdb wgitdgw dytgikq2 guyk jdwldyhlj huotd ujho dwuojhdn gi dhuoh ohjwhd hndwyg uyhbdiw hjnowdjn djwh dwidkjwbd whcdjl weguwekj wchuwjlwh hochwco chou jewhc ujochnscij cujch cohch cucjhbuco chbcnoujch coucjhcnuoc jhcncuoj chncojch bncjoc ubcjo chuhojbujbcuojchbuocj c uhjcbocj kcoujc hucjhwcnjc cuwoc hcujcn cjhcnuoc hcuojc hcocjh cocj </h5>

                                </div>
                               
                            </div>
                        </div>                           
                    </div>
                </div>
            </div >
            
            <Footer />
        </>
    )
}

export default Home