"use client"
import Button from "@/components/button";
import Label from "@/components/label";
import axios from "axios";
import { useState } from "react";

export default function login(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handler= async()=>{

        console.log(email);
        console.log("\n"+password)
        const res = await axios.get("http://localhost:3000/api/user");
        const headers={
            "a":45466
        }

        const data={
            "mail":email,
            "password":password
        }

        const params={
            "name":"Aviral"
        }
        const res2 = await axios.post("http://localhost:3000/api/user",data,{headers});

        console.log(res2.data.body);
        console.log("----------------------\n");

        
        console.log(res.data);
        alert('hi')

    }


    return (
      <div className="font-bold  flex-rows place-content-center justify-center h-screen w-full bg-gradient-to-r from-10% from-indigo-500 via-blue-500 via-30% to-emerald-500 text-white">
        
        <div className="  flex justify-center  text-5xl font-bold">
          Login account here
        </div>
        <div className="flex-rows justify-center  place-content-center ">
          <Label
            setvar={setEmail}
            type={"text"}
            value={"Email"}
            placeholder={"xyz@gmail.com"}
          />
          <Label
            setvar={setPassword}
            type={"password"}
            value={"Password"}
            placeholder={"password here...."}
          />
          <Button value="submit" handler={handler} />
        </div>
      </div>
    );
}