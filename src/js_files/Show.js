import CartContext from "./CartContext"
import { useContext } from "react"
import '../css_file/Show.css'
const Show=()=>{
    const data = useContext(CartContext)
    console.log(data.list);
   
    // console.log(data.setList);
    const handleDelete=(ele)=>{
        alert(ele);
      
     
            const new_list = data.list.filter((item,i)=>{
              return i!==ele;
            })
           //  console.log(ele);
        //    console.log(new_list+"this is delete item")
           data.setList(new_list);
           data.setCount(data.count - 1);
          

           
       
    }

    return(
        <>

           {/* <div> */}
           <h3>Add Carts Item Show Hear...</h3>
               <table border="1" cellPadding="" cellSpacing="">
                   <thead>
                       {/* <tr colspan={6} >
                           Add Carts Item Show Hear..
                       </tr> */}
                   </thead>
                   <tbody>
                       <tr>
                           <th>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Fakeprice</th>
                           <th>Offer percentage</th>
                       </tr>
                   {
                       data.list.map((item,index)=>{
                           return(
                               <tr>
                                    <td><img src={item.image} width="150"/></td>  
                                    < td >{item.name}</td>            
                                    <td>{item.price}</td>     
                                    <td>{item.fakeprice}</td>     
                                    <td>{item.offper}</td>      
                                    <td><button onClick={()=>handleDelete(index)}>Delete</button></td>      
                                    
                               </tr>
                           )
                       })
                   }

                   {/*   */}
                   
               </tbody>
               </table>
           {/* </div> */}
         
        </>
    )
}
export default Show