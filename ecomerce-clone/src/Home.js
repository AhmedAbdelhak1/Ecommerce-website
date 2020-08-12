import React from 'react';
import "./Home.css";
import Product from'./Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="marketplace.jpg" alt=""/>
            <div className="home__row">
                <Product
                id="123456"
                title="galaxy s20 "
                price={450}
                image= "https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Plus-500x500.jpg" /> 
                 <Product
                id="12344556"
                title="Iphone"
                price={450}
                image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/> 
                 <Product
                id="123456"
                title="Airprods"
                price={45}
                image= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000" /> 
                 <Product
                id="123456"
                title="Alexa"
                price={750}
                image= "https://cdn.shopify.com/s/files/1/2660/5106/products/28618010_HC_02_1400x.jpg?v=1571710850" /> 
            </div>
            <div className="home__row">
                <Product
                id="123456"
                title="PowerBank"
                price={350}
                image= "https://www.powerplanetonline.com/cdnassets/xiaomi_mi_power_bank_3_1000_mah_18w_qc_3_pd_plata_01_l.jpg" /> 
                 <Product
                id="123456"
                title="
                Beats Solo Pro Wireless"
                price={450}
                image="https://images-na.ssl-images-amazon.com/images/I/51rPZy6uUAL._AC_SX342_.jpg"/> 
                 <Product
                id="123456"
                title="iPad Pro 2020"
                price={450}
                image= "https://www.powerplanetonline.com/cdnassets/ipad_pro_2020_12_9_256gb_wifi_gris_espacial_03_ad_l.jpg" /> 
                 <Product
                id="123456"
                title="Iphone 11 pro"
                price={450}
                image= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946" /> 
            </div>
            <div className="home__row">
                <Product
                id="123456"
                title="Apple watch S5"
                price={950}
                image= "https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SL1500_.jpg" /> 
                 <Product
                id="123456"
                title="Iphone"
                price={650}
                image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/> 
                 <Product
                id="123456"
                title="Samsung Gear S2"
                price={250}
                image= "https://m.media-amazon.com/images/I/91XpSMwoxYL._AC_SS350_.jpg" /> 
                 <Product
                id="123456"
                title="Xiaomi Mi 10 Lite "
                price={850}
                image= "https://www.gizmochina.com/wp-content/uploads/2020/04/Xiaomi-Mi-10-Youth-5G-1-433x433.jpg" /> 
            </div>
             
        </div>
    )
}

export default Home
