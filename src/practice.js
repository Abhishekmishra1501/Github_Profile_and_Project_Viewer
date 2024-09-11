import { useEffect, useState } from "react";
const Nikhil = () => {

    const [blogdata, setBlogData] = useState();

    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(res=>setBlogData(res))
    },[])
    return(
        <>
        {
            blogdata && blogdata.map(post=>(<div>
                <h1 style={{textAlign:'center', backgroundColor:'lightblue', }}>{post.title}</h1>
               <p>{post.body}</p>

         </div>))
        }
        </>
    )
} 
export default Nikhil;