'use client'
import Image from "next/image";
import mobile from "@/public/Quality-img.png"
import { useState } from "react"
import axios from "axios"

export default function Auth() {

    const [ email , setEmail]= useState("");

const onHandle = async () => {
  if (!email || email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter your email.');
    return;
  }
  try {
    const res = await axios.post('http://localhost:3000/api', {
      email,
    });

    alert(res.data.message); // success response
  } catch (err) {
    console.error(err);
    alert('Error saving email');
  }
};

  return (
    <div>
        <div className="md:w-[1400px] mx-auto mt-20 ">
          <div className="w-[800px] h-[600px] bg-gray-100 md:bg-gray-200 float-end">
          </div>
          <div className=" md:grid md:grid-cols-2 md:gap-20 absolute top-20 md:top-10">
              <div className="bg-transparent px-3 md:p-20 h-[700px] mt-20">
                <h1 className="text-2xl md:text-4xl font-bold">
                  kikk.io
                </h1>
                <p className=" text-xl font-semibold mt-5 md:text-3xl">
                  spend less time editing resumes, more on chasing resumes
                </p>
                <p className="mt-5">
                  Coming soon, join waitlist to get beta access
                </p>
                <div className="mt-8 flex gap-2 shadow-2xl  bg-white w-[400px] py-2 px-2 md:px-0">
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address.." 
                    className="px-3 py-2 w-[275px] md:text-xl"
                  />
                  <button 
                    className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white 
                    font-semibold p-1 md:px-2 md:py-2"
                    onClick={onHandle}
                  >
                      Sign Me Up!
                  </button>
                </div>
                  <div className="mt-5 bg-transparent md:w-[500px] block md:hidden">
                <Image
                src={mobile}
                alt="Email"
                className="md:w-[500px] md:h-[600px] shadow-2xl rounded-2xl" 
                />
              </div>

              </div>
              <div className="bg-transparent md:w-[500px] md:block hidden">
                <Image
                src={mobile}
                alt="Email"
                className="md:w-[500px] md:h-[600px] shadow-2xl" 
                />
              </div>
          </div>
        </div>
    </div>
  );
}
