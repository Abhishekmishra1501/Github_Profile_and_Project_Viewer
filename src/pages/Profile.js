import {useState,useEffect} from "react";

 const Profile =({dataproj})=>{
    if(!dataproj){
        return (<p>Data Not Available</p>)
    }      
    return(
        <>
         <hr style={{clear:"both",marginTop:"200px"}}/>
            
            <h2 style={{clear:"both"}}> Project </h2>
            {
                dataproj && dataproj.map(post => (<><div style={{ clear:"both", marginBottom: '20px',marginTop:"20px"}}>
                    
                <div style={{ float: 'left', marginLeft: '80px', fontWeight: 'bold', textAlign: 'left' }}>
                   {post.name}
                </div>
                <div style={{ float: 'right', marginRight: '80px', textAlign: 'right' }}>
                    <a href={post.html_url}>{post.html_url}</a><br />
                </div>
            </div></>))
            }
        </>
    )
 };
 export default Profile;