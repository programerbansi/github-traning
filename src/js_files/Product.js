import '../css_file/Product.css'
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState,useContext } from 'react';
import CartContext from './CartContext';
const Product=(props)=>{
    const data = useContext(CartContext);
    //console.log(data);
    
  
    return(
        <>
            <div className="div1">
                     

             <Card>
                            <Card.Img variant="top" src={props.image} className='img1' />
                            <Card.Body>
                                <Card.Text>{props.name}</Card.Text>
                                <Card.Text>
                                    <span>₹ <b>{props.price}</b> <s>{props.fakeprice}</s> <span style={{ color: 'deeppink' }}>{props.offper}</span></span>
                                </Card.Text>
                                <Button className="btn1" onClick={()=>{data.clickFunc(props)}}><span>ADD TO CART</span></Button>
                            </Card.Body>
                        </Card>
         </div>
         {/* <div>{list}</div> */}
        
        </>
    )
}
export default Product