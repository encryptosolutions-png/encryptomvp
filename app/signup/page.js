"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Signup(){

const router=useRouter()

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

async function signup(){

const{error}=await supabase.auth.signUp({
email,
password
})

if(error){
alert(error.message)
}else{
alert("Check email for verification")
router.push("/login")
}

}

return(

<div className="p-10 max-w-md mx-auto">

<h2 className="text-2xl font-bold">Signup</h2>

<input
className="border p-2 w-full mt-4"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border p-2 w-full mt-4"
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={signup}
className="bg-red-700 text-white px-4 py-2 mt-4"
>
Create Account
</button>

</div>

)

}