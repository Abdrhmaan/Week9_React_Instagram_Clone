// You do not need to change any code in this file for MVP
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";
import { useState } from "react";
import dummyData from "../../dummy-data";

const SearchBar = (props) => {
  const [query , setquery] = useState("")
  const [filterer , setfilter] = useState(dummyData)

  console.log(props)





  function handlchange(event){
  
    event.preventDefault()
  
    const filter =    dummyData.filter((item) => item.username.toLocaleLowerCase().includes(query.toLocaleLowerCase() ||
    item.comments.some(comnte  => comnte.username.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
     
    ))
    setfilter(filter)
    
  
    


  }
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form" onChange={handlchange}>
        <input
          type="text"
          placeholder="Search"
        />
      </form >
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
