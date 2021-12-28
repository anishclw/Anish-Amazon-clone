import React from 'react'
import "./Home.css"
import Product from "./Product"
 
function Home() {
    

    return (
        <div className="home">
           <div className="home__container">
            <img className="home__image" src="https://mcmscache.epapr.in/post_images/website_350/post_15683439/thumb.jpg" alt=""/>
               <div className="home__row">
                   <Product 
                   title ="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically" 
                   price={29.99}
                   image ="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                   rating = {5}/>
                   <Product
                    title ="Pigeon Lavio 2 Litre Table Top Wet Grinder Machine with 2 Stones and Coconut Scrapper and Atta Kneader - 150 Watt Heavy Duty Motor Ideal for Your Kitchen, White (14107)" 
                    price={30.99}
                    image ="https://m.media-amazon.com/images/I/51mGq5Br+HL._AC_UY327_QL65_.jpg"
                    rating = {4}/>
                    
               </div>
               <div className="home__row">
               <Product 
                title ="Mi LED Smart Color Bulb (B22) - (16 Million Colors + 11 Years Long Life + Compatible with Amazon Alexa and Google Assistant)" 
                price={19.99}
                image ="https://m.media-amazon.com/images/I/41CVeqmeJpL._AC_UL480_QL65_.jpg"
                rating = {3}/>
               
               <Product 
                title ="OnePlus Smart Band :1.1 Inch AMOLED Display, Dual-Color Band Design, Sleep Monitoring of Blood Oxygen Saturation (SpO2), 5ATM +" 
                price={46.99}
                image ="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_QL65_.jpg"
                rating = {4}/>
               
               
               <Product 
                title ="Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Grey (2nd Generation)" 
                price={29.99}
                image ="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY327_QL65_.jpg"
                rating = {5}/>
               
               

               </div>
               <div className="home__row">
               <Product 
                title ="Samsung 123 cm (49 Inches) 4K UHD LED TV UE49MU6470UXZG (Black) (2017 model)" 
                price={50.99}
                image ="https://m.media-amazon.com/images/I/91kcoxImyXL._AC_UY327_QL65_.jpg"
                rating = {4}/>
               
                   
               </div>

           </div>


        </div>
    );
}

export default Home;
