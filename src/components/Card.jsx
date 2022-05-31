import React from 'react'

const Card = ({name,brand,price,price_sign,api_featured_image}) => {
  return (
    <div style={{boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px' ,border:'1px solid gray' , borderRadius:'15px'}}>
        <div style={{}}>
            <img style={{width:'200px', height:'200px' , padding:'8px'}} src={api_featured_image} alt="" />
        </div>
        <div style={{ padding:'8px'}}>
            <h4>{brand} {name}</h4>
            <h5>Price:{price}</h5>
           
        </div>
        <div>

        </div>
    </div>
  )
}

export default Card