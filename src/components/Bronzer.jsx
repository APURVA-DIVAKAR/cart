import React from 'react'
import Card from './Card';
import axios from 'axios'

const Bronzer = () => {
    const[data,setData] = React.useState([]);
    const[isloading,setLoading] = React.useState(false);
    const[error,setError] = React.useState(false);
    const[page,setPage] = React.useState(1);
    React.useEffect(()=>{
    //   getData(page);
    },[]);
    const getData = (page) =>{
      setLoading(true);
      axios({
        method: 'GET',
        url:`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer`,
        params: {
          page: page
        }
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
    return (
      <div className="App">
        {isloading && <h3> .... Loading</h3>}
        {error && <h3>......Error  404</h3>}
        <>
         <div style={{display: 'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'10px',marginTop:'20px'}}>
         {data.map((el)=>         
            <Card key={el.id} {...el}/>
          )}
         </div>
         </>
      </div>
    );
}

export default Bronzer