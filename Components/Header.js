import React from "react"

const name = (props) => {
  return (
    <>
    <div className="h-18 px-5 py-5 bg-green-500 flex items-center justify-between">
        <h2>{props.user}</h2>
        <div className="flex gap-8">
            <h2>About</h2>
            <h2>Career</h2>
            <h2>Blog</h2>
            <h2>Account</h2>
        </div>
    </div>
    </>
  )
};

export default name;
