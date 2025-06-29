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
    const res = await axios.post(`${process.env.NEXT_API_URL}/app/api`, {
      email,
    });
      console.log("This is data",res.data); // success response
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
          <div className=" md:grid md:grid-cols-2 md:gap-35 absolute top-20 md:top-6 px-30">
              <div className="bg-transparent md:w-[650px] px-3 md:px-25 md:py-20 h-[700px] mt-20 items-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                  kikk.io
                </h1>
                <p className="text-xl font-semibold mt-5 md:text-xl w-[360px]">
                  spend less time editing resumes, more on chasing resumes
                </p>
                <p className="mt-5 text-sm">
                  Coming soon, join waitlist to get beta access
                </p>
                <div className="mt-8 flex gap-2 md:gap-1 bg-white shadow-2xl w-[350px] md:w-[370px] md:px-3 py-1 md:p-2 ">
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
