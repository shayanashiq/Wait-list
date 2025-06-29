'use client'
import React, { useEffect, useState } from 'react'
import axios from "axios"

type User = {
  email: string;
  date?: string;
  time?: string;
  day?: string;
};

export default function Adminpanal() {
        const [ users, setUsers] = useState<User[]>([]);

       useEffect(()=>{
    try{
      axios.get("http://localhost:3000/api",)
      .then(response=>{setUsers(response.data)})
    }catch(err){
        console.log(err);
        setUsers([]);
    }
    },[])

  return (
    <div className='bg-blue-50 '>
        <div className='text-xl md:text-2xl font-bold text-center py-5'>Adminpanal</div>
      <div className='md:w-[1200px] mx-auto md:mt-16 h-screen' > 
        <p className='text-center font-semibold mb-5'>Registered Emails</p>
        <div className='bg-white/60'>
            <table className='min-w-full border-gray-500 text-left'>
                <thead>
                    <tr className='bg-gray-300'>
                        <th className='px-1 md:py-3 md:px-4 border-gray-200 border-b border-r'>Email</th>
                        <th className='px-1 md:py-3 md:px-4 border-gray-200 border-b border-r'>Date</th>
                        <th className='px-1 md:py-3 md:px-4 border-gray-200 border-b border-r'>time</th>
                        <th className='px-1 md:py-3 md:px-4 border-gray-200 border-b border-r'>Day</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {users.map((item, index) => (
                    <tr key={index} className="md:px-2">
                        <td className="p-1 md:py-2 md:px-4 border-b border-r border-gray-200">{item.email}</td>
                        <td className="p-1 md:py-2 md:px-4 border-b border-r border-gray-200">{item.date || '-'}</td>
                        <td className="p-1 md:py-2 md:px-4 border-b border-r border-gray-200">{item.time}</td>
                        <td className="p-1 text-sm md:py-2 md:px-4 border-b border-r border-gray-200">{item.day}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
 