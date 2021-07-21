import React from 'react'
import './Sidebar.scss'
import Switch from '../Switch/Switch'


const Sidebar = ({ open, isToggled, onToggle }) => {
   return (
      <div className={open ? "sidebar" : "sidebar active "}>
         <div className={isToggled ? "darkmode" : "lightmode"}>
            <Switch isToggled={isToggled} onToggle={onToggle} />
            <div className="sidebar-menu">
               <p>Menu</p>
               <nav>
                  <ul>
                     <li>
                        <span class="material-icons">
                           home
                        </span>
                        Início
                     </li>
                     <li>
                        <span class="material-icons">
                           track_changes
                        </span>
                        Transferências
                     </li>
                     <li>
                        <span class="material-icons">
                           folder_special
                        </span>
                        Portfólios
                     </li>
                     <li>
                        <span class="material-icons">
                           account_balance_wallet
                        </span>
                        Pagamentos
                     </li>
                     <li>
                        <span class="material-icons">
                           poll
                        </span>
                        Mercado & Preços
                     </li>
                     <li>
                        <span class="material-icons">
                           local_activity
                        </span>
                        Atividades
                     </li>

                  </ul>
               </nav>
            </div>
            <div className="sidebar-support">
               <p>Suporte</p>
               <nav>
                  <ul>
                     <li>
                        <span class="material-icons">
                           groups
                        </span>
                        Comunidade
                     </li>
                     <li>
                        <span class="material-icons">
                           call
                        </span>
                        Ajuda & Suporte
                     </li>
                     <li>
                        <span class="material-icons">
                           settings
                        </span>
                        Configurações
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
