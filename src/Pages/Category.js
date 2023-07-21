import React from 'react'
import './category.css'
import {  useParams } from 'react-router-dom'


const Category = () => {
    const params =useParams()

    return (
        <>
            <div className='category'>
              
                    <h2 id='recipe-categories-page-one-heading'>TOP 50 {params.recipename.toUpperCase()}  </h2>
                    <div className='mainimg'>
                       <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_fill,q_80,w_621,fl_progressive,h_349/v1/img/recipes/51/17/52/ZlmHVdO4SU6PAXvJrm8q_0S9A7193.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>SAVORY BREAKFAST TART</h4>
                    <p>"Wow! This savory tart is amazing. I followed the instructions as given.</p> 
                    <p>Will be making this one often. To make things easier, I've made a large batch of</p> 
                    <p>the jam and canned it so it's on the shelf whenever I want to whip up this delicious tart."</p>

                    <p>-oconojudi</p> 

                    <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>

                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    <p>“A very nice recipe! I've never made a crust using brown rice before,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                  
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/w_621,h_349,c_fill,fl_progressive,q_80/v1/img/recipes/53/72/52/BetB5lhjRgGvnWlrCEHJ_Cauli%20crust%20Rainbow%20SITE-2.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>GORDON RAMSAY'S SCRAMBLED EGGS</h4>
                     <p>“I was treated to breakfast in bed this morning by my boyfriend,</p> 
                     <p>who made this recipe. It was 100% the best scrambled eggs I’ve ever had.</p> 
                     <p>They’re incredible with smoked salmon.”</p>

                     <p>-Cinnamonised</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    <p>“A very nice recipe! I've never made a crust using brown rice before,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>



                    <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>GORDON RAMSAY'S SCRAMBLED EGGS</h4>
                     <p>“I was treated to breakfast in bed this morning by my boyfriend,</p> 
                     <p>who made this recipe. It was 100% the best scrambled eggs I’ve ever had.</p> 
                     <p>They’re incredible with smoked salmon.”</p>

                     <p>-Cinnamonised</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>ISRAELI SHAKSHUKA</h4>
                   <p>“A delicious, typical Israeli breakfast that really can be eaten as</p> 
                   <p>lunch or even dinner! The sauce can be made in advance, and reheated at</p> 
                   <p>the time the eggs are done. I reduced the amount of oil used to make it low-fat,</p> 
                   <p>but you can use more if you need to!”</p>

                   <p>-AniSarit</p>



                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    <p>“A very nice recipe! I've never made a crust using brown rice before,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                  

                  </div>
        </>
    )
}

export default Category