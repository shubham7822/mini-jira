import React from 'react'
import miniJira from "../../assets//img/jiraImg.png"
import "./styles.scss"
import Avatar from 'react-avatar';
import { Link, Navigate } from 'react-router-dom';
import {useNavigate,useLocation} from "react-router-dom"
import { useSelector } from 'react-redux';

function Header() {

  const navigate = useNavigate()
  const location = useLocation()
  const userName = useSelector(state =>  state?.userName)


  return (
    <div className='header'>
        <Link to="/"className='d-flex align-items-center'>
            <img src={miniJira} className="headerImg"/>
             <h2>mini jira</h2>
        </Link>
      <div>
    <div className="m-2 d-flex align-items-center">
      <span onClick={() => {
        navigate("/login")
      }} className={`m-3 mr-2 headerLogoutBtn c-p ${location?.pathname?.includes("/login") && "d-none"}`}>logOut</span>
      <Link to="/login"><Avatar name={userName?.length ? userName : "Jhon Deo"} size="30" round={true}
      color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
      textSizeRatio={3}
      />    
      </Link> 

      </div>  
      </div>
    </div>
  )
}

export default Header