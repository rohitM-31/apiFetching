import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file

const SignUp = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { username, email, password, confirmPassword } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value }); 
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(username.length<=5)
        {
            alert("username have to be atleast 5 characters");
        }
        else if(password !==  confirmPassword)
        {
            alert("password are not matching");
        }
        else
        {
            console.log(data);
        }
        
    };

    return (
        <div className="container">
            <center>
            <form autoComplete="off" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Enter username" value={username} onChange={changeHandler}  className="input-field" /><br />
                <input type="email"  name="email"  placeholder="Enter email"  value={email} onChange={changeHandler} className="input-field"  /><br />
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={changeHandler} className="input-field"  /><br />
                <input type="password" name="confirmPassword" placeholder="Enter confirmPassword" value={confirmPassword} onChange={changeHandler} className="input-field" /><br />
                
                <button type="submit" name="submit">Submit</button>
            </form>
            </center>
        </div>
    );
};

export default SignUp;
