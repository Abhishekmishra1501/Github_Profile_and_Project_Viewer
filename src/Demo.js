// const { Component } = require("react");
 import {Component} from 'react';

class Demo extends Component{
    // 1
   constructor(){
     super();
     // Created State Of Component 
     this.state = {
        data:{}
        // blogTitle:'Blog Title 3',
        // blogdescription:'Blog Description 3'
     }    
   } 

   componentDidMount(){
      fetch('../blogdata.json')
      .then(res=>res.json())
      .then(resjson=>this.setState({data:resjson}  ))
      .catch(err=>console.log(err)) 
   }
   // 2
   render(){
      const posts = this.state.data.blogdata;
      return(
        <>
         {
            posts && posts.map((post,i)=><div key={i}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
            </div>)
         }
        </>
      ) 
   }
}

export default Demo;