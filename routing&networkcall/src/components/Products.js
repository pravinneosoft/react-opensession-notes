import React,{useState,useEffect} from 'react'
import { getAllProduct,delProduct } from '../services/myservice'
export default function Products() {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        getAllProduct()
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
        })
       
    },[])
    const delPro=(id)=>{
        if(window.confirm("Do u want to delete ?")){
           delProduct(id)
           .then(res=>{
               if(res.data){
                   alert("Deleted");
                   getAllProduct()
                   .then(res=>{
                       setProduct(res.data)
                   })
               }
           })
        }
    }
  return (
    <>
     <h2> Products</h2>
      <div className='row container'>
          {product.map(pro=>
            <div className='col-sm-4' key={pro.id}>
                <div className="card">
                  <img src={pro.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{pro.pname}</h5>
                        <p className="card-text">Price : {pro.price}</p>
                        <button  className="btn btn-primary" onClick={()=> delPro(pro.id)}>Delete</button>
                   </div>
                 </div>
            </div>)}
      </div>
    </>
  )
}
