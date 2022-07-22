import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const history = useNavigate()

    const [student, setStudent] = useState({
        stuname: " ",
        email : " "
    })
    
    useEffect(() => {
        getStudent()
    }, [id])

   

    async function getStudent(){
        try{
          const student = await axios.get(`http://localhost:3333/students/${id}`)
          setStudent(student.data)
         
         
        } catch(error){
          console.log(error);
        }

      }


      function onTextChange(e) {
        setStudent({
         ...student,
         [e.target.name]: e.target.value
       })
       // console.log(student)
     }
      

     async function onFormSubmit(e) {
        e.preventDefault()
        
        try{
          await axios.put(`http://localhost:3333/students/${id}`, student);
          setStudent(student.data)
          history('/')
        }catch (error) {
             console.log(error);
        }
  }

    return (
        <div className="container mt-3 ">
            <div>
                <h1 className="bg-primary p-2 mt-3 text-center col-md-8 mx-auto ">Edit Student</h1>

                <div className="Edit-form col-md-8 mx-auto ">
                    <form>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" id="form3Example1" name="id" value={student.id} className="form-control" placeholder="ID" onChange={(e)=>onTextChange(e)} />

                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" id="form3Example2" name="stuname" value={student.stuname} className="form-control" placeholder="Student Name" onChange={(e)=>onTextChange(e)} />

                                </div>
                            </div>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" name="email" value={student.email} className="form-control" placeholder="Email Address" onChange={(e)=>onTextChange(e)} />

                        </div>
                        <div className="d-grid  col-6 mx-auto mb-3">
                            <button className="btn btn-info btn-lg" onClick={(e)=>onFormSubmit(e)} type="button">Update</button>

                        </div>
                        <div className="text-center mt-3">
                            <Link to="/" className="btn btn-dark btn-block btn-lg">Back to Home</Link>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}

export default Edit