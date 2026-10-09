import React ,{useState} from "react";
import {useNavigate} from "react-router-dom";
import './header.css'

const Header = ({selectedCity,setSelectedCity}) => {

const navigate = useNavigate();


  return (
  
      <header style={styles.header}>

      {/* ================= TOP HEADER ================= */}
      <div className="topHeader" style={styles.topHeader} >

        {/* Logo */}
        <div style={styles.logo}>
          <span style={{ color: "#e43f5a" }}>ezy</span>
          <span style={{ color: "#555" }}>schooling</span>
        </div>

        {/* Select City */}
        <select style={styles.cityBtn} value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="pune">Pune</option>
            <option value="banglore">Banglore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="karnatka">karnataka</option>
        </select>
        

        {/* Search */}
        <div style={styles.searchBox} className="searchBox">
          <input
            type="text"
            placeholder="Search School by Name or Location..."
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>⌕</span>
        </div>

        {/* Cart */}
        <div style={styles.cart}>
          🛒
        </div>

        {/* Login */}
        <button className="loginBtn" style={styles.loginBtn} onClick={()=>navigate("/signup")}>
          Log in
        </button>
            
        <div className="hamburger">
            <img style={styles.humbergericon} src="https://www.bing.com/th/id/OIP.F7reOP_-iZbvvQMHFXwECwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=ImgAns&rm=2" alt="Humberger icon" />
        </div>

      </div>


      {/*NAVIGATION  */}
      <div className="navbar">

        <div className="navLeft">

            <div className="home" onClick={()=>{navigate("/")}}>Home</div>

          <div className="activeNav" onClick={()=>{navigate("/explore")}} >
            Explore Schools
          </div>

          <div className="navItem">
            Compare Schools
          </div>
        </div>

        <div className="navRight">
          <div className="navItem">
            Smart Search
          </div>

          <div className="navItem">
            Get Free Counselling
          </div>
        </div>

      </div>

    </header>
     
  );
};


const styles = {

  header: {
    position:"fixed",
    top:"0",
    left:"0",
    zIndex:"1000",
    width: "100%",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 1px 5px rgba(0,0,0,0.08)",
  },

  /* ---------- TOP HEADER ---------- */

  topHeader: {
    height: "82px",
    display: "flex",
    alignItems: "center",
    padding: "0 28px",
    gap: "22px",
    borderBottom: "1px solid #535151",
  },

  logo: {
    fontSize: "25px",
    fontWeight: "600",
    minWidth: "145px",
    whiteSpace: "nowrap",
  },

  cityBtn: {
    height: "42px",
    padding: "0 15px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#444",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    whiteSpace: "nowrap",
  },

  location: {
    fontSize: "15px",
  },

  arrow: {
    fontSize: "17px",
    marginLeft: "4px",
  },

  /* ---------- SEARCH ---------- */

  searchBox: {
    flex: 1,
    maxWidth: "650px",
    height: "44px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: "4px",
    padding: "0 12px",
  },

  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "#555",
  },

  mic: {
    marginRight: "16px",
    fontSize: "15px",
    cursor: "pointer",
  },

  searchIcon: {
    fontSize: "25px",
    color: "#333",
    cursor: "pointer",
  },

  /* ---------- CART ---------- */

  cart: {
    fontSize: "22px",
    cursor: "pointer",
    marginLeft: "auto",
  },



  /* ---------- LOGIN ---------- */

  loginBtn: {
    height: "44px",
    width: "95px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    color: "#555",
    cursor: "pointer",
  },

  humbergericon:{
  height:"30px",
  widht:"30px",
  cursor:"poiner"
  },

  /* ---------- NAVBAR ---------- */

  navbar: {
    height: "58px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingtop: "0 42px",
  },

  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "38px",
    height: "100%",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "38px",
    cursor:"pointer"
  },


  navItem: {
    fontSize: "14px",
    color: "#333",
    whiteSpace: "nowrap",
  },

  activeNav: {
    fontSize: "14px",
    color: "#333",
    whiteSpace: "nowrap",
  },
  navItem :{
  position: "relative",
  cursor: "pointer",
  paddingbottom: "5px",
},


};

export default Header;