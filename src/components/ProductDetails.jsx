import React from 'react'
import { useParams } from 'react-router-dom'
import  axios from 'axios'

const ProductDetails = () => {
    const { id } = useParams()
    console.log(id)
    const[data,setData] = React.useState({});
    const[isloading,setLoading] = React.useState(false);
    const[error,setError] = React.useState(false);
   
    React.useEffect(()=>{
      getData();
      console.log(data)
    },[]);
    const getData = () =>{
      setLoading(true);
      axios({
        method: 'GET',
        url:`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`,
       
      })
      .then(res=>{
        // console.log(res.data)
        setLoading(false);
        setData(res.data);
        console.log(data)
      })
      .catch(err=>{
        setLoading(false);
        setError(true)
        console.log(err)
      })
    }
    const { brand,name,description,api_featured_image,category,price } = data
  return (
    <div>
        <h1>
          Product Details
        </h1>
        <div style={{width:'60%',padding:'28px' , margin:'auto',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
          <div style={{width:'90%',padding:'8px'}}>
            <img style={{width:'100%',padding:'10px'}} src={api_featured_image} alt="Product" />
          </div>
          <div style={{textAlign:'center'}}>
             <h3>{name}-{brand}</h3>
             <h4>${price}</h4>
             <h5>{category}</h5>
             <p>{description}</p>

          </div>
          <div style={{textAlign:'center'}}>
            <button style={{textAlign:'center',padding:'8px',backgroundColor:'skyblue',color:'white',border:'none'}}>Add to cart</button>
          </div>
        </div>

    </div>
  )
}

export default ProductDetails