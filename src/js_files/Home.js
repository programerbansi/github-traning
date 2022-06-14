import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import { useState } from 'react';
import CartContext from './CartContext';
import { useLocation } from 'react-router-dom';
import Show from './Show';
import Login from './Login';
function Home(){
    let location = useLocation();
    console.log(location)
    const data=[
        {
          'name':'Good Vibes Rosehip Radiant Glow Face Serum',
          'image':require('../js_files/image/s1.jpg'),
          'price': '300',
          'fakeprice':'350',
          'offper':'5% Off'
        },
        {
          'name':'Neutrogena Ultra Sheer Dry-Touch Sunblock',
          'image':require('../js_files/image/s2.jpg'),
          'price': '400',
          'fakeprice':'500',
          'offper':'10% Off'
        },
        {
          'name':'Good Vibes Papaya Brightening Face Wash',
          'image':require('../js_files/image/s3.jpg'),
          'price': '400',
          'fakeprice':'450',
          'offper':'5% Off'
        },
        {
          'name':'Blue Heaven LASH TWIST Mascara(Water Proof)',
          'image':require('../js_files/image/s4.jpg'),
          'price': '260',
          'fakeprice':'300',
          'offper':'2% Off'
        },
        {
          'name':'Vitamin C Defying Face Serum',
          'image':require('../js_files/image/s5.jpg'),
          'price': '650',
          'fakeprice':'800',
          'offper':'20% Off'
        },
        {
          'name':'Mamaearth Ubtan Natural Face Wash',
          'image':require('../js_files/image/s6.jpg'),
          'price': '300',
          'fakeprice':'350',
          'offper':'5% Off'
        },
        {
          'name':'The Big Apple Of My Eye Kohl Stick',
          'image':require('../js_files/image/s7.jpg'),
          'price': '400',
          'fakeprice':'500',
          'offper':'10% Off'
        },
        {
          'name':'Good VibesSaffron Nourishing Day Cream',
          'image':require('../js_files/image/s8.jpg'),
          'price': '700',
          'fakeprice':'1000',
          'offper':'25% Off'
        },
        {
          'name':' Green Tea Glow Toner | Smoothing',
          'image':require('../js_files/image/s9.jpg'),
          'price': '460',
          'fakeprice':'520',
          'offper':'14% Off'
        },
        {
          'name':' Pink Roses Glow Toner | Smoothing',
          'image':require('../js_files/image/s10.jpg'),
          'price': '150',
          'fakeprice':'200',
          'offper':'5% Off'
        },
        {
          'name':'Radiant Glow Face Serum',
          'image':require('../js_files/image/s11.jpg'),
          'price': '800',
          'fakeprice':'1000',
          'offper':'20% Off'
        },
        {
          'name':'Heaven LASH TWIST Foundation(Water Proof)',
          'image':require('../js_files/image/s12.jpg'),
          'price': '200',
          'fakeprice':'240',
          'offper':'3% Off'
        },
        {
          'name':'White Glow Face Serum',
          'image':require('../js_files/image/z1.jpg'),
          'price': '600',
          'fakeprice':'750',
          'offper':'15% Off'
        },
        {
          'name':'Orange Face Cream',
          'image':require('../js_files/image/z2.jpg'),
          'price': '390',
          'fakeprice':'470',
          'offper':'4% Off'
        },
        {
          'name':'Green apple face cream',
          'image':require('../js_files/image/z3.jpg'),
          'price': '350',
          'fakeprice':'450',
          'offper':'10% Off'
        },
        {
          'name':'Rose Powder Makup',
          'image':require('../js_files/image/z4.jpg'),
          'price': '240',
          'fakeprice':'300',
          'offper':'5% Off'
        },
        {
          'name':'Coffe Face Pake',
          'image':require('../js_files/image/z5.jpg'),
          'price': '390',
          'fakeprice':'420',
          'offper':'7% Off'
        },
        {
          'name':'Face Glow Black Coffe creme',
          'image':require('../js_files/image/z6.jpg'),
          'price': '300',
          'fakeprice':'350',
          'offper':'5% Off'
        },
        {
          'name':'Green apple foundetion',
          'image':require('../js_files/image/z8.jpg'),
          'price': '400',
          'fakeprice':'550',
          'offper':'15% Off'
        },
        {
          'name':'Onion Oil and shmpoo',
          'image':require('../js_files/image/z9.jpg'),
          'price': '500',
          'fakeprice':'600',
          'offper':'10% Off'
        },
       
    
       
        
      ];
      const [list,setList]=useState([]);
      const [count,setCount]=useState(0);
       
      const handeleClick=(ele)=>{
          console.log(ele)
          alert("Add Item In Cart..")
          setList((prevdata)=>{
                  return [ ...prevdata,ele]
          })  

          setCount(count+1);
      }
      return (
        <>
         
            <CartContext.Provider value={{'clickFunc':handeleClick,'list':list ,'setList':setList,'count':count , 'setCount':setCount}}>
                <Header/>
                {
                    location.pathname == "/" ? <div className='main'>
                    {
                        data.map((item)=>{
                            return(
                                <Product image={item.image} name={item.name} price={item.price} fakeprice={item.fakeprice} offper={item.offper}/>
                            )
                        })
                    }  
                    </div> : null
                }
                {
                    location.pathname =="/show"? <Show/> : null
                }
                {
                  location.pathname =="/Login"? <Login/>:null
                }
                
            </CartContext.Provider>
        </>
      );
}
export default Home;