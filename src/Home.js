import BlogList from "./BlogList";
import Navbar from "./Navbar";
import "./App.css";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {

const {data:blogs, isPending, error} = useFetch('http://localhost:8080/Blogs');
  //  const handleDelete = (id) =>{
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlog(newBlogs)
  //  }
return (
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Yonas")}
          title="Yonas's Blogs"
        />
      )} */}
    </div>
  );
}



function App() {

const {data:blogs, isPending, error} = useFetch('http://localhost:8080/Blogs');
  //  const handleDelete = (id) =>{
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlog(newBlogs)
  //  }
 return (
    <div className="App">
      <Navbar />
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Yonas")}
          title="Yonas's Blogs"
        />
      )}
    </div>
  );
}


export default Home;
