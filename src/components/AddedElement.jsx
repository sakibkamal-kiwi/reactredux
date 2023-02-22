import React from 'react'

function AddedElement(props) {
    console.log(props.data,"props in header")
    const element = props.data;
   console.log(element , "extract");
    return (
        <div>
           <div className="add-to-cart">
            <span className='cart-count'>{props.data.length}</span>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU'/>
            </div>
            {element.map((user) => (
                <>
            <h1>{user.cardData.price}</h1>
            <h4>{user.cardData.name}</h4>
            </>
 
      ))}
        </div>
        
       
    )
}
export default AddedElement
