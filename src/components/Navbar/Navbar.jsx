import React from 'react'
import './Navbar.scss'


const Navbar = ({ onChange, isToggled }) => {
   return (
      <div className={isToggled ? "navbar darkmode" : "navbar lightmode"}>
         <div className="navbar-icons">
            <span class="material-icons">
               manage_accounts
            </span><span class="material-icons">
               notifications
            </span>
         </div>
         <form>
            <div>
               <input type="text" className="coin-input" placeholder="Procurar" onChange={onChange} />
               <span class="material-icons">
                  manage_search
               </span>
            </div>
         </form>

      </div>
   )
}

export default Navbar
