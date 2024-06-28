import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"aviralrawat365@gmail.com",
        password:12345678
    })
}

export async function POST(req:NextRequest){
    

    const body=await req.json();
    console.log(req.headers.get("a"));
    console.log(req.nextUrl.searchParams.get("name"));

    return NextResponse.json({

        body:{
            mail:body.mail,
            password:body.password
        },
        headers:{
            a:req.headers.get("a")

        },
        params:{
            value:req.nextUrl.searchParams.get("name")
        },
        msg:"you are signed in successfully"
    })
}