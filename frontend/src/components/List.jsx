
import data from "../data.js";
import { Link } from "react-router-dom";
function List() {
    console.log(data)
  return (
     <div className="mt-5 card">
      {data.map(item => {
        return (
            <>
                <div key={item}>
                <h2><Link to={`/post/:${item.title}`}>{item.title}</Link></h2>
                <p>{item.Content}</p>
                </div>
            </>
        )
      })}
     </div>
  ) 
}

export default List