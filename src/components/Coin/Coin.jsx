import React from 'react'
import './Coin.scss'

const Coin = ({ isToggled, image, name, price, volume, priceChange, marketcap }) => {
   return (
      <div className={isToggled ? "coin-container darkmode" : "coin-container"} >
         <div className="coin-row">
            <div className="coin-data">
               <div className="coin">
                  <img src={image} alt="crypto" />
                  <p>{name}</p>
               </div>
               <p className="coin-price">R${price.toFixed(2)}</p>
               <p className="coin-marketcap">R${marketcap.toLocaleString()}</p>

               {priceChange < 0 ?
                  (<p className="coin-percent red">
                     <span class="material-icons">
                        <span class="material-icons">
                           trending_down
                        </span>
                     </span>
                     {priceChange.toFixed(2)}%</p>) :
                  (<p className="coin-percent green">
                     <span class="material-icons">
                        trending_up
                     </span>
                     {priceChange.toFixed(2)}%</p>)
               }
            </div>
         </div>
      </div>
   )
}

export default Coin
