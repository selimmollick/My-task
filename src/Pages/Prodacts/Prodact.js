import React, { useState, useEffect } from 'react'

import './Prodact.css'

function Prodact() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let ComponentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (ComponentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        ComponentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading....
      </>
    )
  }
  const ShowProducts = () => {
    return (
    
      
     <>
     <div className='container'>
        <div className='row filter_btn'>
          <div className='col-md-6'>
          <h2 className='display-6 fw-bolder text-left'>Latest products</h2>
          </div>

          <div className=' col-md-6 filter_btn'>
          <div className='button d-flex mb-5 pb-5 justify-content-end'> 
        <button className='btn btn-outline-dark me-2'>All</button>
        <button className='btn btn-outline-dark me-2'>Man</button>
        <button className='btn btn-outline-dark me-2'>Woman</button>

      </div>
            </div>

            <hr />

            {filter.map((product) => {
              return (
                <>
                  <div className="col-md-3 mb-4">
                    <div className="card h-70 text-center p-4" key={product.id}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title} height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                        <p className="card-text lead fw-bold">${product.price}</p>
                        <a href="#" className="btn btn-outline-dark">
                         Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
     </div>

    
     </>

     
    )

  }
  
  return (
    <>
      <div className='container my-5 py-5'>
        
        <div className='row justify-content-center'>
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>   
    </>
    

   

    
  )

  


}

export default Prodact