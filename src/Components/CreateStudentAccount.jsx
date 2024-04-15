import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import '../CSS/CreatingAccount.css';
import axios from "axios";

function CreateStudentAccount(){
    const [idnumber, setIdnumber] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [department, setDepartment] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordError, setPasswordError] = useState("");

    const handleChange = async () => {
        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        // if (!password.match(passwordRegex)) {
        // setPasswordError("At least 8 characters long, at least one lowercase letter, at least one uppercase letter, at least one special character from the set !@#$%^&*");
        // return;
        // }else if (password !== confirmPassword){
        // setPasswordError("Invalid password, confirm your password again.")
        // }

    const student_data = {
        idNumber: idnumber,
        firstname: firstname,
        lastname: lastname,
        studentDepartment: department,
        studentCourse: course,
        studentYear: year,
        studentBirthdate: birthdate,
        studentEmail: email,
        studentPassword: password
    }
        try {
            const response = await axios.post("http://localhost:8080/dentalmanagement/insertStudent", student_data);
            console.log(response.data);
            console.log("Submitted!");
          } catch (error) {
            console.error(error);
          }
    };

    return(
        <>
            <center>
            <Nav />
            <div className="container">
                <div className="red-rectangle">
                    <div className="h1-holder">
                        <h1>Create Student Account</h1>
                    </div>
                    <div className="input-container">
                    <input 
                        type='text' 
                        placeholder='Enter ID number'  
                        className='input'
                        value={idnumber}
                        onChange={(e) => setIdnumber(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Firstname'  
                        className='input'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Lastname'  
                        className='input'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Department'  
                        className='input'
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Course'  
                        className='input'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Year'  
                        className='input'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Birthdate'  
                        className='input'
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='Enter Email'  
                        className='input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password' 
                        placeholder='Enter Password'  
                        className='input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="button-container">
                        <button className="button" type="submit" onClick={handleChange}>Create Account</button>
                    </div>
                </div>
                
            </div>
            </center>
        </>
    );
}
export default CreateStudentAccount;