import { Component } from "react";

class Demo2 extends Component {
    constructor(){
        super();
        this.state ={
            Abhishek:{}
        }
    }
    async componentDidMount(){
        // 1 - Promise Based 2  - Async Await
         
        // PROMISE BASED

        // fetch("../blogdata.json")
        // .then(res=>res.json())
        // .then(res=>this.setState({Abhishek:res}))
        // .catch(err=>console.log(err))

        // ASYNC AWAIT

        const res = await fetch("../blogdata.json");

        const resjson  = await res.json();

        this.setState({Abhishek:resjson});

    }
    render(){
        const Data = this.state.Abhishek.blogdata;
        return(
            <>
            {
                Data && Data.map(post=>(<><h2>{post.title}</h2> <p>{post.description}</p></>))
            }
            
            </>
        )
    }
}
export default Demo2;