import { NextResponse } from "next/server"

export async function POST(req){

const{message}=await req.json()

const high=[
"send money",
"wire transfer",
"crypto payment",
"collaboration fee",
"guaranteed profit"
]

const medium=[
"urgent",
"limited offer",
"verify account",
"click this link",
"investment opportunity"
]

let matches=0

const text=message.toLowerCase()

high.forEach(k=>{
if(text.includes(k)) matches++
})

medium.forEach(k=>{
if(text.includes(k)) matches++
})

let result="Safe"

if(matches<=2 && matches>0) result="Suspicious"
if(matches>=3) result="Scam"

return NextResponse.json({result})

}