import React from 'react'
import './TitlesTable.scss'

const TitlesTable = ({isToggled}) => {
   return (
      <div className={isToggled ? "titles-table teste" : "titles-table"}>
         <p>Moeda</p>
         <p>Preço</p>
         <p>Valor de mercado</p>
         <p>Variação</p>
      </div>
   )
}

export default TitlesTable
