import React, {useEffect , useState} from 'react'
import axios from 'axios'



const Suppliers = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then(response => setProducts(response.data));

}, []);

  return (
    <div className='container'>
<section className='flex flex-wrap gap-20'>
      {products.map((item)=>{
        return(
        <div className='border w-90 p-3'>
        <img className='w-50 mx-auto' src={item.image} alt="" />
        <h2 className='pt-3 bg-black text-white p-3 '>{item.title}</h2>
        <h3>BDT {item.price}</h3>
        <h4 className='bg-green-500 text-white p-3'>{item.description}</h4>
      </div>

        )
      })}
      
    </section>
    </div>
  )
}

export default Suppliers