"use client"
import React, { useState } from "react"
import Header from "@/Components/Header"
const page = () => {
  const [user,setUser]  = useState("Vansh");
  return (
    <>
    <Header user={user}/>
    <div>{user}</div>
    </>
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
