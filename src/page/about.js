import React, { Component } from "react";

class About extends Component{
    // state 

    constructor(){
        super();
        this.state={
            blogdata:{}
            // setState
        }
    }
    // fetch
    componentDidMount(){
        fetch('../blogdata.json')
        .then(res=>res.json())
        .then(res=>this.setState({blogdata:res}))
        .catch(err=>console.log(err))
    }
    render(){
         //console.log(this.state.blogdata[0]);
         const {blogdata} = this.state;
         
        return(
            <>
       {blogdata && blogdata.blogdata && blogdata.blogdata.map(post=>(<><h2 style={{textAlign:'center', backgroundColor:'lightgreen',fontSize:'20px'}}>{post.title}</h2><p>{post.description}</p></>))
        
       }
            </>
        )
    }
}
// const About=() =>{
//     return(

//         <>
//            <section class="p-2" style={{height: '30vh'}}>
//         <div class="container-fluid bg-secondary">
//             <div class="row">
//                 <div class="col-lg-12 text-center lg-3">
//                 <h1 class="text-info display-2">About us</h1>
//                 <p class="lead text-primary"> lorem ipsum dolfj, chrfn jff efjfe sfhftvvt lorem ipsum dolfj, chrfn hebde dhed ndenx ejdende deden</p>
//                 </div>
//                 </div>
       
//               </div>
//     </section>
//         </>
//     )
// }
export default About;


// {[]} => []