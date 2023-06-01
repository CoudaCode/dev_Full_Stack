import { useState, useRef } from "react";
import { Suspense } from "react";

function Layout({ children }) {
  const inputRef = useRef();
  const textRef = useRef();
  const [isCollapse, setCollapse] = useState(false);
  const toggleVisibility = () => setCollapse(!isCollapse);
  const handleOnChange = (e) => console.log(e.target.value);
  const handleOnSubmit = (e) => e.preventDefault();

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MERN</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="layout container">
        <button className="btn btn-dark float-end mb-4" onClick={toggleVisibility}>add</button>
       {isCollapse && <form action="" className="mt-5" onSubmit={handleOnSubmit}>
           
            <input ref={inputRef} type="text" className="form-control my-1" />

            <textarea ref={textRef} className="form-control" style={{height : "100px"}}></textarea>
            <button type="submit" className="btn btn-primary float-end mb-4" >Submit</button>
       
        </form>}
        {children}
      </div>
    </>
  );
}

export default Layout;
