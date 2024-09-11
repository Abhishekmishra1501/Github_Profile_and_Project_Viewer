import React, { Component } from "react";
import Nav from "./page/nav";
import blog from "./page/blog";
//import About from "./page/about";
import Home from "./page/home";
import Footer from "./page/footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Profile from './Profile';
import About from "./page/about";
import Blog  from "./blogpages/blog";
import AboutOne from "./page/about";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Demo from './Demo';
import Demo2 from "./Demo2";
import Fetch from "./Fetch";
//import Test from "./Test";
import { useState,useEffect } from "react";
import "./App.css";

const App=() =>{
  //
  const [dataproj, setDataproj] = useState();
  //
  const [data,setData] = useState([]);
  //
  useEffect(()=>{
    //
      const getdata= async()=>{
         try{
              const res=await fetch("https://api.github.com/users/octocat");
              const resjson = await res.json();
                            setData(resjson);
         }catch(e){
              console.log(e);
         }
      }
      getdata();

      //-------------------------

      fetch("https://api.github.com/users/octocat/repos")
      .then( res =>res.json())
      .then(res => setDataproj(res))
      .catch(err=>console.log(err))
  },[]);



  // useEffect(() =>{
  //     fetch("https://api.github.com/users/octocat/repos")
  //     .then( res =>res.json())
  //     .then(res => setDataproj(res))
  //     .catch(err=>console.log(err))
  // },[]);
  
 

  return(
    <>
     <div className="App">
    
    <Project data={data}/>
    <Profile dataproj={dataproj}/>
    {/* <Test/> */}
   {/* <Fetch/> */}
    {/* <Demo2/> */}
      {/* <Demo/> */}
      {/* <Blog/>   */}
     {/* <About/> */}
     </div>
    </>
  )}
  export default App;
// //   const data = {
   
// //     name:'Abhishek Mishra',
// //     Age:'23',
// //     MS:'single',
// //     position:"Web Developer ",
// //     location:'New Delhi',
// //     ctc:`2200`
//  //  {/* <Profile name={"Johbn Doe"} position={"Software Analyst"} location={"Wasington DC" } ctc={2200}/>
//    // */}
//     //{/* <Profile profile_data={data}/> */}
//    // {/* <JobProfile/> */}
// //    return(
// //       <>
// //  <BrowserRouter>

// //   <Nav/>
// //   <Routes>
// //         <Route path="/" Component={Home}/>     
// //          <Route path="about" Component={About}/>
// //          <Route path="blog" Component={blog}/>
// //  </Routes>
// //  <Footer/>

// //  </BrowserRouter>  
// //  </>
// //    )
//  }

