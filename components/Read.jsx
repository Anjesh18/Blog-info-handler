import React, { useState,useEffect } from 'react'
import { Link} from 'react-router-dom'
export default function Read() {
    const [data,setData]=useState()
    const [error,setError]=useState("")
    async function getData(){
        const response=await fetch("http://localhost:5000");
        const result=await response.json()
        if(!response.ok){
            console.log(result.error)
            setError(result.error)
            return
        }
        if(response.ok){
            console.log(result)
            setData(result)
        }
        
    }
useEffect(()=>{
    getData()
},[])
const handleDelete=async(id)=>{
    const response= await fetch(`http://localhost:5000/${id}`,{
        method: "DELETE"
    })
    const result=response.json()
    if(!response.ok){
        console.log(result.error)
        setError(result.error)
    }
    if(response.ok){
       setError("Deleted successfully")
       setTimeout(()=>{
     setError("")
     getData()
       },2000)
    }
}
   return <div>{error && <div className='alert alert-danger'>{error}</div>}
     <div className='flex flex-row flex-wrap rounded-xl gap-11 h-54 justify-start align-center  w-full p-2 m-4'>All Data
   
    {data?.map((item)=>{
      return <div className='flex flex-wrap flex-col justify-center align-center space-x-11 gap-4 mb-6' key={item._id}>
        <div className='flex flex-col align-center justify-start  rounded-xl  shadow-xl align-center h-60 m-4 p-4'>
        <div className='text-2xl mb-2 p-2 text-center font-bold'>{item.name}</div>
        <div className='text-lg mb-2 p-2 font-semibold'>{item.email}</div>
        <div className='text-4xl text-center mb-2 p-2 font-semibold'>{item.age}</div>
        <div className='flex flex-row justify-between align-center'>
            <Link to={`/${item._id}`} className='ml-2'>Edit</Link>
            <a className='mr-2' href="#" onClick={()=>handleDelete(item._id)}>Delete</a>
        </div>
        </div>
        
      </div>
    })}
   </div>
   </div>
}
