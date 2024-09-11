import  { useEffect, useState } from "react";

const Test = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("../blogdatas.json")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
     {
        data && data.map(post=><p>{post.title}</p>)
     }
    </>
  );
};

export default Test;
