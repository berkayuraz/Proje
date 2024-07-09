import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'

import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import {useDispatch,useSelector} from 'react-redux'
import { calculateBasket, removeFromBasket, setDrawer } from './redux/slices/basketSlice'

function App() {
  const {products, drawer, totalAmount } =useSelector((store)=> store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket());
  },[])

 const removeBasket = (payload) =>{
    dispatch(removeFromBasket(payload));
    dispatch(calculateBasket());
}
  

  return (
   <div>

     <PageContainer>
       <Header />
      <RouterConfig />
      <Drawer className='drawer' sx={{padding: '20px'}} onClose={()=>dispatch(setDrawer())} anchor='right' open={drawer} >
        {
          products && products.map((product) =>{
            return(
              <div key={product.id}>
              <div className='flex-row' style={{padding:'10px'}}>
                <img style={{marginRight:'5px'}} src={product.image} width={50} height={50} />
                <p style={{width:'350px', marginRight:'5px'}}>{product.title}({product.count})</p>
                <p style={{fontWeight:'bold', marginRight:'10px',width:'60px'}}> {product.price}TL</p>
                <button onClick={() => removeBasket(product)} style={{padding:'5px',borderRadius:'5px',backgroundColor:'coral',border:'none',color:'#fff',width:'50px'}}>Sil</button>

              </div>

              
              
             
              </div>



            )




          })

        }
              <div>
                <p style={{textAlign:'center'}}>Toplam Tutar :{totalAmount}</p>

              </div>
        
        
      </Drawer>
     
    </PageContainer>  
   </div>
  )


}
  

export default App
