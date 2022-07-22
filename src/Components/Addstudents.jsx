import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Addstudents = () => {
  const [student, setStudent] = useState({
    stuname: ' ',
    email: ' '
  })

  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const history = useNavigate()

  function onTextChange(e) {
     setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
    // console.log(student)
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    
    if (student.stuname === ' ' && student.email === ' ') {
      setAlert(true)
      setMessage('Please fill all fields')
    }
    console.log(student)
    
    try{
      await axios.post('http://localhost:3333/students', student);
      history('/')
      
    }catch (error) {
         console.log(error);
    }
      
   
    

  }
  return (

    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {
              alert ? (
              <div className="alert alert-dismissible alert-warning">
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
              <h4 className="alert-heading">Warning!</h4>
              <p className="mb-0">{message}</p>
            </div>
            ): false
            }
          </div>
        </div>

      </div>
      <div className="container mt-3">

        <div className="row ">

          <div className="col-md-8 mx-auto ">
            <div className="card border-primary">
              <div className="card-header text-center pt-3 ">
                <h3>Add Student 🧑‍🎓</h3>
              </div>
              <div className="form-container p-3 ">
                <form>
                  <div className="form-group mb-3">

                    <input type="text" className="form-control" placeholder="Enter name" name="stuname" onChange={(e) => onTextChange(e)} />
                  </div>
                  <div className="form-group mb-3">

                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => onTextChange(e)} />
                  </div>


                  <button type="submit" className="btn btn-primary" onClick={(e) => onFormSubmit(e)}>Submit</button>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
      <div className="text-center mt-3">
        <Link to="/" className="btn btn-dark btn-block btn-lg">Back to home</Link>
      </div>
    </div>
  )
}

export default Addstudents