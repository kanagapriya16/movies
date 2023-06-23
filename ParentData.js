import React, { useEffect, useState } from 'react'
import ParentTab from './ParentTab'
import './main.css'

function ParentData() {
    const [movie, setmovie] = useState([])
    const fetchBooks = async (url) => {
       
            const res = await fetch(url);
            console.log(res);
            const data = await res.json();
          
            console.log(data);
            console.log("hii");
            setmovie(data);
      
    }
    useEffect(() => {
   
       fetchBooks('/Alluserlist');
   }, [])
  return (
    <div>
        

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                
    
            </tr>
        </thead>
        <tbody>
            <ParentTab movie={movie} />
        </tbody>
    </table>
        </div>
  )
}

export default ParentData;