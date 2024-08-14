import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function Update() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState(0)
    const [error,setError]=useState("")
    const {id} = useParams()
    const navigate= useNavigate()


   const getSingleUser=async()=>{
    
    const response= await fetch(`http://localhost:5000/${id}`)

    const result= await response.json()

    

    if(!response.ok){
        setError(result.error)
    }

    if(response.ok){
        setError("")
        
        setName(result.name)
        setAge(result.age)
        setEmail(result.email)
    }
   }


   useEffect(()=>{
    getSingleUser()
   },[])
  

 const handleUpdate=async(e)=>{
    e.preventDefault()

  const updateUser={name,email,age}

  const response= await fetch(`http://localhost:5000/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateUser),
    headers:{
        "Content-Type":"application/json"
    }
  })

  const result=await response.json()

  if(response.ok){
    setError("")
    navigate("/all")
  }
  if(!response.ok){
    setError(result.error)
  }
 }

  return (
    <div>
      <div className='container my-6'>
        {error && <div className='alert alert-danger'>{error}</div>}
        <h2 className='text-center'>Edit the data</h2>
     <form onSubmit={handleUpdate}>
     <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
 
  </div>
  <div className="mb-3">
    <label className="form-label">Age</label>
    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
  )
}
