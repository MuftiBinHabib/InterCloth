
import React ,{useState} from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { getDatabase, ref, push, set } from "firebase/database";

const Contact = () => {
  const[name , setName] = useState('')
  const[mail , setMail] = useState('')
 
  const[mess , setMess] = useState('')



  // Form Validation

  const[error , setError] = useState("")
  const[merror , setmError] = useState("")
  const[messerror , setmessError] = useState("")
  const handleMess = (e) => {
    setMess(e.target.value);
  }
  const handleMail = (e) => {
    setMail(e.target.value);
  }
  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = () =>{
    if(!name){
      setError("Required")
    }

    else {
      setError("")
      const db = getDatabase();
      set(push(ref(db, 'nam/')) ,{
        name:name
      }).then(()=>{
        console.log("data sent")
      }
      ).catch((err) =>{
        console.log(err)
      })
    }
    
    if(!mail){
      setmError("Required")
    } else {
      setmError("")
    }
    if(!mess){
      setmessError("Required")
    } else {
      setmessError("")
    }
    
    
    
 
    console.log(name)
 
  }
  return (
    <div className="container">
      <section className='mt-5 flex justify-between'>
        <div>
          <h2>Number:</h2>
          <h2>Address: 123 street</h2>

          <ul className='mt-5 flex gap-5'>Socials:
            <li className='pt-2'><FaFacebook /></li>
            <li className='pt-2'><FaInstagram /></li>
          </ul>
        </div>

        <div className="right">

          <ul className='me-50'>
          <li className='mt-5'> <input onChange={handleName} type="text" placeholder='Name'/></li>{error && <p>{error}</p>}
            <li className='mt-5'> <input onChange={handleMail} type="text" placeholder='Email'/></li>{merror && <p>{merror}</p>}
            <li className='mt-5'><textarea  onChange={handleMess} type="text" placeholder='Message' className='h-40 w-45' /></li>{messerror && <p>{messerror}</p>}

            
          </ul> 
          <button onClick={handleSubmit} className='border px-2 py-1 border-white rounded text-white bg-green-500'>Submit</button>
        </div>
      </section>
    </div>
  )
}

export default Contact