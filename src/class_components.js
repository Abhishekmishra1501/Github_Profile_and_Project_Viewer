class App  extends Component{
    //   const [dataproj, setDataproj] = useState();
  //   //
  //   const [data,setData] = useState();
    constructor(){
         super();  
         //STATE
         this.state={
            data:{},
            dataproj:[]
         }
    }
  
    // FETCH
    async componentDidMount(){
      try{
         // PROFILE DATA
          const res=await fetch("https://api.github.com/users/octocat")
          const resjson = await res.json();
          this.setState({data:resjson});
  
          // PROJECT DATA
          const resproj = await fetch('https://api.github.com/users/octocat/repos');
          const jsonProj = await resproj.json();
          this.setState({dataproj:jsonProj})
  
      }catch(e){
          console.log(e);
      }
    }
  
    render(){
      const projdata = this.state.dataproj;
      const profiledata = this.state.data;
      return(
        <>
        
        </>
      )
    }
  
  
  }
  
  export default App ;