"use client"
import axios from "axios";
import React, { useState } from "react"

const page = () => {
  const [Images,setImages] = useState([]);

  const getImages = async () =>{
    try{
    const response = await axios.get("https://picsum.photos/v2/list");
    const data=response.data;
      
     setImages(data);
     console.log(Images);
    }
    catch(error){
      console.error("Error Fetching Images");
    }
  };
  return (
    <div>
      <button onClick={getImages} className="px-5 py-3 bg-green-600 text-white rounded">Get Image</button>
      <div className="p-10">
          {Images.map((elem,i)=>{
           return <img
           key={i}
           src={elem.download_url}
           width={300}
           height={300}
           className="m-10 rounded inline-block"/>
          })}
      </div>
    </div>
  )
};

export default page;







// "use client"
// import React, { useState } from "react"

   
// const page = () => {
//   const [marks,setMarks] = useState(80);
//   return (
//     <>
//     <h1>My marks were {marks}</h1>
//     <button onClick={()=>
//          setMarks(35)
//     }>Update</button>
//     </>
//   )
// };

// export default page;
