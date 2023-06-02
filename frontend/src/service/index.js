import axios from "axios"

export function getPosts(){
        new Promise(resolve => {
          axios.get('https://localhost:4000/')
          .then(console.log)
          .catch(console.error)
        })
  }