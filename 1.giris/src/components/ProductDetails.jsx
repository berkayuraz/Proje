import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';



function ProductDetails() {
    const { id } = useParams();
    const { products , selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description} = selectedProduct
    
   const [count , setCount]= useState(0);

   



    const dispatch = useDispatch();
    
    const increment = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        setCount(count - 1)
    }
    const addBasket = () =>{
        const payload ={
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    

    useEffect(() => {
       getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })        
            
    }
                
        
   

    return (
      <div style={{marginTop: '30px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <div style={{marginRight:'40px'}}>
             <img src={image} width={300} height={500} alt='' />
            </div>
            <div>
                <h1 style={{fontFamily :'arial'}}>{title}</h1>
                <p style={{fontFamily :'arial', fontSize :'25px'}}>{description}</p>
                <h1 style={{fontSize : '50px', fontFamily:'arial', fontWeight:'bold',color:'dodgerblue'}}>{price} TL</h1>

                <div style={{display : 'flex', alignItems: 'center'}}>
                    <CiCirclePlus onClick ={increment} style={{fontSize : '40px', marginRight:'5px'}} /> <span style={{fontsize:'35px'}}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{fontSize:'40px', marginLeft:'5px'}} />
               </div>

               <div>
                 <button
                 onClick={addBasket}
                  
                  style={{
                    marginTop:'25px',
                    border:'none',
                    padding:'10px',
                    backgroundColor:'orange',
                    color:'white',
                    borderRadius:'5px'
                 }}>Sepete Ekle</button>
               </div>

                

            </div>




        </div>
    )
}

export default ProductDetails