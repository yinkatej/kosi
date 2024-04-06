import React, { useState } from 'react'
import './AddStudent.css'
import classroom from '../images/classroom.png'
import axios from 'axios'

const AddStudent = () => {
    const [student, setStudent] = useState({})
   
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(student)
        // axios.post('', student)
    }
    return (
        <div className='s-container'>
             <h2 className='add'>Add Student</h2>
            <div className='image'>
                <img src={classroom} alt="" />
            </div>
          <form onSubmit={handleSubmit}>
             
              <div>
                  <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname"
                        onChange={e => setStudent({ ...student, fname: e.target.value })}
                        value={student.fname||''}
                    />
              </div>
               <div>
                  <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname"
                        onChange={e => setStudent({...student, lname:e.target.value})}
                        value={student.lname||''}
                    />
              </div>
               <div>
                  <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" id="gender"
                         value={student.gender||''}
                        onChange={e => setStudent({ ...student, gender: e.target.value })}
                       
                    />
              </div>
              <div>
                  <label htmlFor="age">Age</label>
                    <input type="text" name="age" id="age"
                        onChange={e => setStudent({ ...student, age: e.target.value })}
                        value={student.age||''}
                    />
              </div>
               
               <div>
                  <label htmlFor="class">Class</label>
                    <input type="text" name="clas" id="class"
                        onChange={e => setStudent({ ...student, clas: e.target.value })}
                        value={student.clas||''}
                    />
              </div>
               <div>
                  <label htmlFor="fee">Amount of fund needed</label>
                    <input type="text" name="" id="fee"
                        onChange={e => {
                            setStudent({ ...student, fee: `${e.target.value}` })
                        }}
                        value={student.fee}
                    />
              </div>
               <div>
                  <label htmlFor="image">Upload Image</label>
                    <input type="file" name="" id="image"
                         onChange={e => setStudent({ ...student, image: e.target.files[0] })}
                        
                    />
              </div>
               <div>
                  <label htmlFor="id">School ID</label>
                    <input type="file" name="" id="id"
                         onChange={e => setStudent({ ...student, schoolId: e.target.files[0] })}
                        
                    />
              </div>
              <div>
                <input className='s-btn' type="submit" value={'Submit'} />

              </div>

          </form>
    </div>
  )
}

export default AddStudent