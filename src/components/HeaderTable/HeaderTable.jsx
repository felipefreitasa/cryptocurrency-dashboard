import React from 'react'
import './HeaderTable.scss'

const HeaderTable = () => {
   return (
      <div className="header-table">
         <div className="title">
            <strong>Top 100 criptomoedas</strong>
            <p>by Coingecko API</p>
         </div>
         <div className="buttons">
            <p>Todas as moedas</p>
            <p>Tokens</p>
            <p>Favoritos</p>
         </div>
      </div>
   )
}

export default HeaderTable
