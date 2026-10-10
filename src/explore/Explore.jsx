import React from 'react'
import './explore.css'
import school_webp from "../assets/school1.webps";
import school_webp2 from "../assets/school2.webp";
import school_webp3 from "../assets/school3.webp";
import school_webp2 from "../assets/";
import school_webp2 from "../assets/";
import school_webp2 from "../assets/";


const Explore = ({selectedCity}) => {
    const schools = [
  {
    id: 1,
    name: "Orchids The International School",
    location: "Koparkhairane, Navi Mumbai",
    fees: "₹ 7.71 K - 15.32 K",
    board: "CBSE",
    classes: "Nursery – 10 Class",
    ratio: "14:1",
    views: "4.56K",
    rating: "5.0",
    city:"mumbai",
    image: school_webp,
    description:
      "Education is so much more than just books; at Orchids the International School, Koparkhairane, we believe in providing holistic development for our students.",
    admission: true,
  },
  {
    id: 2,
    name: "Radcliffe School",
    location: "Ulwe, Navi Mumbai",
    fees: "₹ 4.36 K - 6.67 K",
    board: "CBSE",
    classes: "Nursery – 12 Class",
    ratio: "30:1",
    views: "9.25K",
    city:"pune",
    image: school_webp2,
    description:
      "Radcliffe is a chain of schools that believes in the attainment of worthy goals. The educators at Radcliffe School believe that success is not the absence of failure but the attainment of ultimate objectives.",
    admission: true,
  },
  {
    id: 3,
    name: "Orchids The International School",
    location: "Seawoods, Navi Mumbai",
    fees: "₹ 7.50 K - 14.50 K",
    board: "CBSE",
    classes: "Nursery – 10 Class",
    ratio: "18:1",
    views: "6.07K",
    city:"karnataka",
    image:school_webp3 ,
    description:
      "Orchids The International School provides a balanced learning environment with academics, activities and holistic development.",
    admission: true,
  },
];

const filteredSchools = selectedCity? schools.filter((school)=>school.city.toLowerCase()===selectedCity.toLowerCase()) : schools;



  return (
    <div>
    <div className="school-page">

      {/* TOP BAR */}
      <div className="school-topbar">
        <p>
          Schools in India – <b>142 Schools</b>
          <span> | Updated at : 05 Sept 2026, 11:23 am</span>
        </p>

        <div className="sort-section">
          <label>Sort By - </label>

          <select>
            <option>Popularity</option>
            <option>Fees: Low to High</option>
            <option>Fees: High to Low</option>
            <option>Rating</option>
          </select>

          <button className="view-btn active">☷</button>
          <button className="view-btn">▦</button>
        </div>
      </div>

      {/* SCHOOL CARDS */}
      <div className="school-list2">
         {filteredSchools.length === 0 ? (
    
    <div className="no-data">
      <h2>Data not found</h2>
      <p>No schools found for {selectedCity}.</p>
    </div>

  ) : (

    filteredSchools.map((school) => (

      <div className="school-card2" key={school.id}>

        <div className="school-images">
            <div className="main-image">
            <img src={school.image} alt={school.name} />
            </div>
          </div>

      <div className="school-content">
        <h2>{school.name}</h2>
        <p>{school.city}</p>
        <p>{school.location}</p>
      </div>

      </div>

    ))

  )}

      

        {schools.map((school) => (
          <div className="school-card2" key={school.id}>

            {/* IMAGE SECTION */}
            <div className="school-images">

              <div className="main-image">

                <img src={school.image} alt={school.name} />

                {school.admission && (
                  <span className="admission-badge">
                    Admissions Open
                  </span>
                )}

                <span className="view-count">
                  {school.views} 👁
                </span>

                <span className="board-badge">
                  Coed
                </span>
              </div>

              {/* THUMBNAILS */}
              <div className="thumbnail-row">

                <div className="thumbnail">
                  <img src={school.image} alt="" />
                </div>

                <div className="thumbnail">
                  <img src={school.image} alt="" />
                </div>

                <button className="view-all">
                  View All
                </button>

              </div>
            </div>

            {/* SCHOOL INFORMATION */}
            <div className="school-content">

              {/* TITLE */}
              <div className="school-title-row">

                <div>
                  <h2>{school.name}</h2>

                  <p className="location">
                    📍 {school.location}
                  </p>
                </div>

                <label className="compare">
                  Compare
                  <input type="checkbox" />
                </label>

              </div>

              {/* DETAILS */}
              <div className="school-details">

                <div className="detail-box">
                  <span>Monthly Fees</span>
                  <strong>{school.fees}</strong>
                </div>

                <div className="detail-box">
                  <span>Board:</span>
                  <strong>{school.board}</strong>
                </div>

                <div className="detail-box classes-box">
                  <span>Classes:</span>
                  <strong>{school.classes}</strong>
                </div>

                <div className="detail-box">
                  <span>Student Teacher Ratio:</span>
                  <strong>{school.ratio}</strong>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="description">
                <p>{school.description}</p>

                <button className="arrow-btn">
                 ⌄
                </button>
              </div>

              {/* BOTTOM ACTIONS */}
              <div className="school-actions">

                <button className="call-btn">
                  ☎
                </button>

                <button className="callback-btn">
                  Request a Callback
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* FLOATING CHAT */}
      <button className="chat-button">
        💬
      </button>

    </div>

      
    </div>
  )
}

export default Explore
