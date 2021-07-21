import React from 'react'
import './Switch.scss'

const Switch = ({ isToggled, onToggle }) => {
   return (
      <div className="switch-container">
         <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="slider" />
         </label>
      </div>

   )
}

export default Switch
