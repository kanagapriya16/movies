import { useNavigate } from "react-router-dom";
import  icons from "./icons.png"


const ParentTab = ({ movie }) => {
    const navigate=useNavigate();


    function handleClick(e){
        global.values=e.target.value;
      
     console.log(global.values);
      
    
        navigate('/tab');
    }
   
   
    return (
        <>
            {
                movie.map((addmovie) => {
                    
                    return (
                        <tr key={addmovie.id}>
                            <td  ><input type="image" src={icons} alt="Submit" width="20" height="20"  value={addmovie.id}  onClick={handleClick} />{addmovie.id}</td>
                            <td>{addmovie.name}</td>
                            <td>{addmovie.address}</td>
                           
                        </tr>
                    )
                })
            }
        </>
    )
}
export default ParentTab;