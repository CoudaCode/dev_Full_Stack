import { useState, useRef } from "react";
import { Suspense } from "react";
function Layout({ children}){
    const inputRef = useRef()
    const textRef = useRef()
    const [isCollapse, setCollapse] = useState(false)
    const toggleVisibility = () => setCollapse(!isCollapse)
    const handleOnChange = e => console.log(e.target.value)
    const handleOnSubmit = e => e.preventDefault()



    return (
      <>

      </>
    )
}


export default Layout