import React from 'react'
import './Card.css'


export default props => {

   const cardStyle = {
      backgroundColor: props.color || '#F00',
      borderColor: props.color || '#F00'
   }

   return (
      <div className="Card" style={cardStyle}>
         <div className="Title"><h2>{props.title}</h2></div>
         <div className="Content">{props.children}</div>
      </div>
   )
}

/*
   <--!*--> 
      Criado uma variavel, ela receber 2 propriedades. Caso essa props n'ao sejam passadas vai usar a padrao selecionada.
      a function, sem nome, vai receber props, essa props, primeiramente sera o style aplicado pela variavel criada, cardStyle.
      Segunda div, h2, que recebe a props. title, que sera o titulo do card.
      Terceida div, vai receber o conteudo, que é os filhos,no caso todo o conteudo relacionado. Vou usar componentes dentro desses cards.
      *- Passar ele como filho, do primeiro componente.



*/