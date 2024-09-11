import { useEffect, useState } from "react";

const Blog = () =>{
    // State 

    const [blogdata,setBlogData] = useState();


    useEffect(()=>{
        fetch('../blogdata.json')
        .then(res=>res.json())
        .then(res=>setBlogData(res))
        .catch(err=>console.log(err))
    },[])

    // Hook Method
    // useEffect(()=>{
    //    fetch('../blogdata.json')
    //    .then(res=>res.json()) 
    //    .then(res=>setBlogData(res))
    // },[])
    return(
        <>
        {
            blogdata && blogdata.blogdata.map(post=>(<div>
                <h1 style={{textAlign:'center',backgroundColor:'green'}}>{post.title}</h1>
                <p style={{background:'lightcyan'}}>{post.description}</p>
            </div>))
        }
           {/* <h1 style={{textAlign:'center',backgroundColor:'lightgray'}}>{blogdata[0].title}</h1>
           <p>{blogdata[0].body}</p> */}
        </>
    )
}

export default Blog;