import React from "react"
import Link from "next/link";
const Header = (props) => {
  return (
    <>
    <div className="text-white h-18 px-5 py-5 bg-green-500 flex items-center justify-between">
        <h1>Logo</h1>
        <div className="flex gap-8">
            <Link href="/About">About</Link>
            <Link href="/Account">Account</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Career">Career</Link>
        </div>
    </div>
    </>
  )
};

export default Header;
