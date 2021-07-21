import React from 'react'
import './Hamburguer.scss'

const Hamburguer = ({open, onClick, isToggled }) => {


   return (
      <div className={isToggled ? "hamburguer-button darkmode" :"hamburguer-button" }>
         <button className={
            open ?
               " hamburger hamburger--emphatic is-active" :
               "hamburger hamburger--emphatic"} 
               type="button"
               onClick={onClick}
               >
            <span class="hamburger-box">
               <span class="hamburger-inner"></span>
            </span>
         </button>
      </div>
   )
}

export default Hamburguer
