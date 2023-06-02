import { useLocation, Link } from "react-router-dom";
import data from '../data';
function Single() {
  // REcuperation de l'id passer en State dans List.jsx
  const params = useLocation()
  // Recuperer l'objet en verifiant avac l'id
  const post = data.find(post => post._id === params?.state?.id)
  console.log(post)

  return (
    <>
      <Link to="/">Retour</Link>
        <h3>{post?.title}</h3>
        <h3>{post?.Content}</h3>
    
    </>
  ) 
}  

export default Single