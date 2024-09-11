import { useEffect,useState } from "react";

const Fetch =() =>{
const [data,setData]=useState();
useEffect(()=>{
  fetch("")
  .then(res=>res.json())
  .then(res=>setData(res))
  .catch(err=>console.log(err))

},[])


return(
  <>
  </>
)
}