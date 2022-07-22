import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const { id } = useParams();
    const [student, setStudent] = useState([])
    useEffect(() => {
        async function getStudent(){
            try{
              const student = await axios.get(`http://localhost:3333/students/${id}`)
              setStudent(student.data)
            } catch(error){
              console.log(error);
            }
          }
        getStudent()
    }, [id])

   


    return (
        <div>

            <div className="container mt-3 shadow">
                <div className="table-container text-center">
                    <h1>Students Details </h1>
                    <table className="table table-striped ">
                        <thead>
                            <tr className="table-warning ">
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>

                            </tr>
                        </thead>
                        <tbody>
                             
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.stuname}</td>
                                <td>{student.email}</td>


                            </tr>

                        </tbody>
                    </table>


                </div>

            </div>
            <div className="text-center mt-3">
                <Link to="/" className="btn btn-dark btn-block btn-lg ">Back to Home</Link>
            </div>
        </div>
    )
}

export default View