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
        <div className="md:min-w-[1000px] mx-auto mt-12 h-fit">
          <div className="w-[800px] h-[550px] bg-gray-100 md:bg-gray-200 float-end">
          </div>
          <div className=" md:grid md:grid-cols-2 md:gap-28 absolute top-20 md:top-6">
              <div className="bg-transparent px-3 md:p-20 h-[700px] mt-20">
                <h1 className="text-2xl md:text-3xl font-bold">
                  kikk.io
                </h1>
                <p className=" text-xl font-semibold mt-5 md:text-xl">
                  spend less time editing resumes, more on chasing resumes
                </p>
                <p className="mt-5 text-sm">
                  Coming soon, join waitlist to get beta access
                </p>
                <div className="mt-8 flex gap-1 shadow-2xl  bg-red-300 w-[350px] py-2 px-2 md:px-0">
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address.." 
                    className="px-2 py-1 w-[250px] "
                  />
                  <button 
                    className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white 
                    font-semibold p-1 md:px-1 md:py-1 text-sm"
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
                className="md:w-[450px] md:h-[500px] shadow-2xl" 
                />
              </div>
          </div>
        </div>
    </div>
  );
}
