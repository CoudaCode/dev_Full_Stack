import { useLocation } from "react-router-dom";
import data from '../data';
function Single() {
  // REcuperation de l'id passer en State dans List.jsx
  const {state : {id}} = useLocation()
  // Recuperer l'objet en verifiant avac l'id
  const post = data.find(post => post._id === id)
 

  return (
    <>
        <h3>{post.title}</h3>
        <h3>{post.Content}</h3>
    
    </>
  ) 
}

export default Single