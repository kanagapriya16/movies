import React, { useEffect, useState } from 'react'
import ChildTabs from './ChildTabs'
import './main.css'
import './ParentTab'

function ChildDataa() {
  
 const [child, setchild] = useState([])
    const fetchBooks = async (url) => {
       
            const res = await fetch(url);
            console.log(res);
            const data = await res.json();
          
            console.log(data);
            setchild(data.movies);
            console.log(child);
      
    }
    useEffect(() => {
      
       fetchBooks(`/Alluserlist/${global.values}`);
   }, [])
 
  return (

    
   <div>
        

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Director</th>
    
            </tr>
        </thead>
        <tbody>
            <ChildTabs child={child} />
        </tbody>
    </table>
        </div>
    
  

 
  )
}

export default ChildDataa;