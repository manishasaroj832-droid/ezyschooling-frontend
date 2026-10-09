import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import './Home.css'
import {userEffect} from "react"




const HomePage = () => {

  const navigate = useNavigate();
useEffect(()=>{
  const elements = document.querySelectorAll(".scoll-element");
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:0.15,
  });
  elements.forEach((element)=>{
    observer.observe(element);
    })
  return ()=>{
      observer.disconnect();
    }
},[]);



  const schools = [
  {
    name: "The Class of One",
    image: "/src/assets/school_img.jpg",
    affiliated: "CBSE, IGCSE, NIOS",
  },
  {
    name: "Sunbeam World School",
    image: "/src/assets/school_img2.jpg",
    affiliated: "CBSE, Cambridge, IAO, NWAC, NIOS",
  },
  {
    name: "The World Academy",
    image: "/src/assets/school_img3.jpg",
    affiliated: "IGCSE, NIOS",
  },
  {
    name: "StayQ Online School",
    image: "/src/assets/school_img4.jpg",
    affiliated: "CBSE, IGCSE, NIOS",
  },
  {
    name: "Global Online School",
    image: "/src/assets/school_img5.jpg",
    affiliated: "CBSE, IGCSE",
  }
];


// continure where u left off section

const recentSchools = [
  {
    name: "Sunbeam World School",
    time: "15 mins ago",
    image: "/src/assets/house.webp",
    category: "Online Schools, Online Schools",
    affiliated: "CBSE, IAO, NWAC (Northwest Accreditation Commission), NIOS, Cambridge",
  },
  {
    name: "The Class of One",
    time: "18 mins ago",
    image: "/src/assets/boy_study.jpg",
    category: "Online Schools, Online Schools",
    affiliated: "CBSE, NIOS, IGCSE",
  },
];


  return (
    <div>
      
        <div className="home">
      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>Find the Right Online Schools</h1>

          <p>
            Search, compare & apply to the best online schools in India.
          </p>

          <div className="school-search">

            <input type="text" placeholder="Enter here ..."/>

            <span className="mic-icon">🎙</span>

            <button>Search</button>

          </div>

        </div>

      </section>

    </div>
  
   
   
    {/* schools section */}
    <div className='scoll-element'>
    <section className="schools-section">

      <div className="schools-heading">
        <h2>Popular Online Schools In India on Ezyschooling</h2>
        <p>
          Parents across India are applying to these online schools the most
        </p>
      </div>

      <div className="schools-carousel">

        {schools.map((school, index) => (
          <div className="school-card" key={index}>

            <img
              src={school.image}
              alt={school.name}
              className="school-image"
            />

            <div className="school-overlay">
              <div>
                <h3>{school.name}</h3>
                <p>
                  <strong>Affiliated To:</strong> {school.affiliated}
                </p>
              </div>
              <button className="profile-btn" onClick={()=>{navigate("/the class one")}}>
                View Profile ↗        
              </button>
            </div>
          </div>
        ))}

      </div>
      <button className="carousel-arrow">→</button>
      </section>
    </div>

      {/* prefered google */}
      <div className='scoll-element'>
      <div className='google-src'>
        <div className='Goolge_logo'>
          G
        </div>
        <p>Add <span> Ezyschooling</span> as a prefered source on <u>Google</u> </p>
        <button className='arrow'> &rarr; </button>
      </div>
      </div>
        
      {/* continue wehre  u left off section */}
       <div className='scoll-element'>
      <section className="continue-section">
      <div className="continue-heading">
      <h2>Continue where you left off</h2>
      <p>
      Pick up from where you stopped exploring. Here are the schools you viewed recently.
      </p>
      </div>
      <div className="recent-schools">
      {recentSchools.map((school, index) => (
      <div className="recent-card" key={index}>
        <img
          src={school.image}
          alt={school.name}
        />
        {/* Time badge */}
        <div className="time-badge">
          ◉ &nbsp;{school.time}
        </div>
        {/* Bottom content */}
        <div className="recent-overlay">
          <h3>{school.name}</h3>
          <p className="category">
            {school.category}
          </p>
          <p className="affiliated">
            <strong>Affiliated To:</strong> {school.affiliated}
          </p>
          <button className="recent-profile-btn" onClick={()=>{navigate("/the class one")}}>
            View Profile ↗
          </button>
          </div>
        </div>
      ))}
    </div>
      </section>
      /</div>

  {/* last search section */}
  <div className='scoll-element'>
  <div className="timeSection">
   <img src="https://static.vecteezy.com/system/resources/previews/018/928/893/original/clock-icon-in-flat-design-style-analog-time-signs-illustration-png.png" alt="" />
  Continue Your last search
  </div>
  <section className="fee-section">
  <div className="fee-container">
  

      {/* left content */}
    <div className="fee-intro">
      <div className="illustration">
        <div className="person">👨🏻‍💻</div>
        <div className="books">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <h3>Have a budget in mind?</h3>
      <p>Find schools that match your budget</p>
    </div>
    
    {/* Right content */}
    
    <div className="fee-content">
      <h2>Online Schools By Fees</h2>
      <p className="subtitle">
        Explore online schools in India that match your family's budget.
      </p>

      <div className="fee-grid">

        <a href="#" className="fee-card">
          <div className="rupee">₹</div>
          <div>
            <h3>Affordable Schools</h3>
            <p>&lt; ₹3,000 / month</p>
          </div>
          <span className="arrow">→</span>
        </a>

        <a href="#" className="fee-card">
          <div className="rupee">₹</div>
          <div>
            <h3>Standard Schools</h3>
            <p>₹3,000 – ₹6,000 / month</p>
          </div>
          <span class="arrow">→</span>
        </a>

        <a href="#" class="fee-card">
          <div class="rupee">₹</div>
          <div>
            <h3>Mid-Range Schools</h3>
            <p>₹6,000 – ₹10,000 / month</p>
          </div>
          <span class="arrow">→</span>
        </a>

        <a href="#" class="fee-card">
          <div class="rupee">₹</div>
          <div>
            <h3>Premium Schools</h3>
            <p>₹10,000 – ₹15,000 / month</p>
          </div>
          <span class="arrow">→</span>
        </a>

        <a href="#" class="fee-card">
          <div class="rupee">₹</div>
          <div>
            <h3>Elite Schools</h3>
            <p>&gt; ₹15,000 / month</p>
          </div>
          <span class="arrow">→</span>
        </a>

      </div>
    </div>
    

  </div>
</section>
</div>
  
  {/* form */}
  <div className='scoll-element'>
<div className='scoll-elemetn'>
  <div class="container">
    {/* Left Section: Image  */}
    <div class="image-section">
       {/* Replace src with your image file/path  */}
      <img src="/src/assets/formImage.png" alt="Online Schooling Preview" />
    </div>
     {/* Right Section: Form  */}
    <div class="form-section">
      <h2>Finding the right online school is just a click away</h2>
      <p class="subtitle">Start your school search today. Let our experts help you!</p>
      <form onSubmit={(event)=>{event.preventDefault}}>
         {/* Parent Name  */}
        <div class="form-group">
          <div class="input-wrapper">
            <i class="fa-regular fa-user icon"></i>
            <input type="text" placeholder="Parent Name" required />
          </div>
        </div>

         {/* Phone Number  */}
        <div class="form-group">
          <div class="input-wrapper">
            <div class="phone-prefix">
              <img src="https://flagcdn.com/w20/in.png" alt="India Flag"/>
              <span>+91</span>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <input type="tel" placeholder="Phone Number" required/>
          </div>
        </div>

        {/* Email Address */}
        <div class="form-group">
          <div class="input-wrapper">
            <i class="fa-regular fa-envelope icon"></i>
            <input type="email" placeholder="Email Address" required />
          </div>
        </div>

         {/* Select Class */}
        <div className="form-group">
          <div className="input-wrapper">
            <i className="fa-solid fa-layer-group icon"></i>
            <select required value="" style={{color:"#94a3b8"}} onChange={(e)=>(e.target.style.color="#334155")}>
              <option value="" disabled hidden>Select Class</option>
              <option value="nursery">Nursery / KG</option>
              <option value="primary">Class 1 - 5</option>
              <option value="middle">Class 6 - 8</option>
              <option value="secondary">Class 9 - 10</option>
              <option value="senior-secondary">Class 11 - 12</option>
            </select>
          </div>
        </div>

         {/* Disclaimer  */}
        <p class="terms-text">
          By submitting this form, you agree to the <a href="#">Privacy Policy</a> and <a href="#">Term & Conditions</a>
        </p>

         {/* Submit Button  */}
        <button type="submit" class="btn-submit">Get Free Counselling</button>
      </form>
    </div>
  </div>
</div>
</div>

  {/* last image */}
  <div className='scoll-element'>
  <div className='scoll-elemetn'>
  <div class="last_image">
    <img src="/src/assets/last_img.jpeg" alt="Image" />
  </div>
  </div>
  </div>


  </div>
  )
}
 

export default HomePage





    