import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import '../CSS/CreatingAccount.css';
import axios from "axios";

function CreateStaffAccount(){
    const [idnumber, setIdnumber] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [department, setDepartment] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = async () =>{
        const staff_data = {
            idNumber: idnumber,
            firstname: firstname,
            lastname: lastname,
            department: department,
            birthdate: birthdate,
            email: email,
            password: password
        }

        try {
            const response = await axios.post("http://localhost:8080/dentalmanagement/insertStaff", staff_data);
            console.log(response.data);
            console.log("Submitted!");
          } catch (error) {
            console.error(error);
          }
    };
    return(
        <>
            <Nav />
            <center>
            <div className="container">
                <div className="red-rectangle">
                    <div className="h1-holder">
                        <h1>Create Staff Account</h1>
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
export default CreateStaffAccount;