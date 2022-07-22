import React,{useState,useEffect} from 'react'

import { FaTrashAlt , FaEdit} from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Studentslist = () => {
  const[students,setStudents] = useState([])
  useEffect(()=>{
    getAllStudent()
  },[])

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3333/students/${id}`)
    var newstudent = students.filter((item)=>{
      return item.id !== id;
    })
    setStudents(newstudent);
  }

  async function getAllStudent(){
    try{
      const students = await axios.get("http://localhost:3333/students")
      setStudents(students.data)
    } catch(error){
      console.log(error);
    }
  }

  return (
    <div>
     
        <div className="container mt-3 shadow">
            <div className="table-container text-center pt-3 pb-4">
              <h1>Students List </h1>
            <table className="table table-striped ">
  <thead>
    <tr className="table-danger ">
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((students,i)=>{
        return(
          <tr key={i}>
          <td>{i+1}</td>
          <td>{students.stuname }</td>
          <td>{students.email}</td>
          <td>
          <Link to={`/view/${students.id}`}>
            <AiFillEye style={{color:'#FAC213' ,fontSize:'1.8rem'}}/>
          </Link>
    
          <Link to={`/edit/${students.id}`} className="mx-3">
          <FaEdit style={{color:'#37E2D5',fontSize:'1.8rem'}} />
          </Link>
          <span>
              <FaTrashAlt  onClick={()=> handleDelete(students.id)} style={{color:'#F94C66',fontSize:'1.8rem'}}/>
          </span>
           
    
          </td>
          
        </tr>
        )
      })
    }
    
   
  </tbody>

</table>
            </div>
        </div>
        <div className="text-center mt-3">
                <Link to="/add-student" className="btn btn-dark btn-block btn-lg shadow ">Add Student</Link>
            </div>
        </div>
  )
}

export default Studentslist