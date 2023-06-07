import { useEffect, useState } from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import {getPosts} from '../service'

function List() {
    const [posts, setPosts] = useState([])
  useEffect(()=>{
    getPosts().className
  },[])

  return (
     <div>
      {data.map(item => {
        const title = item.title.split(' ').join('-')
        const content = `${item.Content.substring(0,100)}.....`
        return (
                <div key={item._id} className="mt-5 card">
                  <h2><Link to={`/post/${title}`} state={{id : item._id}}>{item.title}</Link></h2>
                  <p>{content}</p>
                </div>
            
        )
      })}
     </div>
  ) 
}

export default List