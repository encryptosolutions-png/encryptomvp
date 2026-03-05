"use client"

import {useEffect,useState} from "react"
import {supabase} from "@/lib/supabaseClient"
import {useRouter} from "next/navigation"

export default function Dashboard(){

const[user,setUser]=useState(null)
const router=useRouter()

const[message,setMessage]=useState("")
const[result,setResult]=useState("")

useEffect(()=>{
checkUser()
},[])

async function checkUser(){

const{data}=await supabase.auth.getUser()

if(!data.user){
router.push("/login")
}else{
setUser(data.user)
}

}

async function checkScam(){

const res=await fetch("/api/scam-check",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
})

const data=await res.json()

setResult(data.result)

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold">
Dashboard
</h1>

{user && (
<p className="mt-2">
Welcome {user.email}
</p>
)}

<div className="mt-8">

<h2 className="text-xl font-bold">
Scam Detector
</h2>

<textarea
className="border w-full p-2 mt-2"
placeholder="Paste message here"
onChange={(e)=>setMessage(e.target.value)}
/>

<button
onClick={checkScam}
className="bg-red-700 text-white px-4 py-2 mt-2"
>
Check Message
</button>

{result && (
<p className="mt-3 font-bold">
Result: {result}
</p>
)}

</div>

</div>

)

}