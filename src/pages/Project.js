// import { useState,useEffect } from "react";
import "./project.css";
const FunctionalFetchApi= ({data})=>{
  
const arr=[
    { Name: 'html_url', value: data.html_url },
    { Name: 'repos_url', value: data.repos_url },
    { Name: 'name', value: data.name},
    { Name: 'company', value: data.company},
    { Name: 'location', value: data.location},
    { Name: 'email', value: data.email},
    { Name: 'bio', value: data.bio}
    
]

if(!arr){
   return (<p>Data Not Available!</p>)
}
return (
        <>
        <div><img src="https://avatars.githubusercontent.com/u/583231?v=4" style ={{width:190,padding:'20px'}}></img><br/><h3 style={{fontSize:'25px'}}>Profile</h3></div>
         {arr && arr.map( post =>(
               <><div style={{ clear:"both", marginBottom: '20px',marginTop:"20px"}}>
                    
               <div style={{ float: 'left', marginLeft: '80px', fontWeight: 'bold', textAlign: 'left' }}>
                  {post.Name}:
               </div>
               <div style={{ float: 'right', marginRight: '80px', textAlign: 'right' }}>
                   {post.Name.includes("url") ? (<a href={post.value}><p>{post.value}</p></a>)
                   : (<p>{post.value==null ? <p>Not Found</p> : <p>{post.value}</p>}</p>)}
               </div>
           </div></>)
                    )
                 } </>
                )   
    
}
export default FunctionalFetchApi;