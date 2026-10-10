
import React,{useState} from "react"
import {useNavigate} from "react-router-dom";
import "./signup.css";


const Signup = () => {
  const [formData,setFormData]  = useState({name:"",email:"",password:"",phoneNumber:""})
  const navigate = useNavigate();
  
  const handleSubmit = async (e) =>{ 
    e.preventDefault();  
    // validation
    // Name : only letters and spaces
    const namePattern = /^[A-Za-z]+$/;
    if(!namePattern.test(formData.name.trim())){
      alert("Name should contain only letters");
      return
    }
    // email 
    const emailPattern = /^[A-Za-z0-9]+@gmail\.com$/;
    if(!emailPattern.test(formData.email.trim())){
      alert("Enter a valid email");
      return
    }
    //mobile
    const numberPattern = /^[0-9]{10}$/;
    if(!numberPattern.test(formData.phoneNumber))
    {
        alert("Mobile number must contain exactly 10 digits");
        return ;
    }
    // password
    if(formData.password.length<6)
    {
      alert("Password must be at least 6 characters");
      return;
    }
try{
    const response =  await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData)  
    }
  );
  console.log("status",response.status);
  
     if(response.ok){
    const data = await response.json();
    console.log("Registered user",data);
    alert("Account created successfully!")
  }
  else{
    alert("Registeration failed!")
  }
}
  catch(error){
    console.log("Error",error)
    alert("Backend Issue");
  };
  setFormData({
    name:"",email:"",password:"",phoneNumber:""
  });
  }


  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="signup-page">

      {/* Left Section */}
      <div className="signup-left">

        <div className="left-content">
          <h1>Find the right school<br />for your child.</h1>

          <p>
            Discover, compare and choose the best schools
            for your child's bright future.
          </p>

          <div className="features">
            <div>✓ Explore top schools</div>
            <div>✓ Compare schools easily</div>
            <div>✓ Get expert guidance</div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="signup-card">

          <h2>Create your account</h2>

          <p className="subtitle">
            Sign up to start exploring schools
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                name= "email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                name = "phoneNumber"
                value = {formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* <div className="terms">
              <input type="checkbox" />
              <span>
                I agree to the Terms & Conditions and Privacy Policy
              </span>
            </div> */}

            <button type="submit" className="signup-btn">
              Submit
            </button>

          </form>

          <p className="login-text">
            Already have an account?
           <button onClick={()=>{navigate("/login")}} > <span> Log in </span>  </button> 
          </p>
{/*  */}
        </div>
      </div>

    </div>
  );
};

export default Signup;




