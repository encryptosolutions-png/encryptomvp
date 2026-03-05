'use client'
import Link from "next/link"

export default function Home(){

return(

<div className="p-10 text-center">

<h1 className="text-5xl font-bold text-red-700">
Protect Your Creator Business
</h1>

<p className="mt-4 text-lg">
Cybersecurity SaaS for Digital Creators
</p>

<div className="mt-6 space-x-4">

<Link
href="/signup"
className="bg-red-700 text-white px-6 py-3 rounded"
>
Get Started
</Link>

<Link
href="/login"
className="border px-6 py-3 rounded"
>
Login
</Link>

</div>

</div>

)

}