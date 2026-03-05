"use client"

import Link from "next/link"
import Logo from "./Logo"

export default function Navbar(){

return(

<nav className="flex justify-between items-center p-4 border-b">

<Logo/>

<div className="space-x-4">

<Link href="/">Home</Link>

<Link href="/login">Login</Link>

<Link href="/signup">Signup</Link>

</div>

</nav>

)

}