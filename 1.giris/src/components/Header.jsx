import React from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {useDispatch, useSelector} from'react-redux'
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {products} = useSelector((store) => store.basket);
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <div className='flex-row' onClick={()=>navigate("/")}>

           <img className='logo' src="./src/images/images.png"  />
           <p className='logo-text'> Uraz Sepeti</p>
        </div>

        <div>
            <input className='search-input' type="text" placeholder='Ara' />
            <Badge onClick={()=> dispatch(setDrawer())} badgeContent={products.length} color="error">
              <CiShoppingBasket style={{marginRight:'6px'}} className='icon' />
            </Badge>
             
            

        </div>


    </div>
  )
}

export default Header