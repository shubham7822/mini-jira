import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'reactstrap'
import "./styles.scss"
const EditInput = (props) => {

  const {title,taskId} =props 
  const [inputValue,setInputValue] = useState("")
  const[editInputSave,setEditInputSave] = useState(title)
   
  const [titleClick,setTitleClick] = useState(false)
 
 const handleChange =(e) => {
      const value = e.target.value
         setInputValue(value)
    }

    const handleSave = () => {
       setEditInputSave(inputValue)
       setTitleClick(false)
    }

  return (
    <div className='mt-4'>
      <p className='mt-3'><Link to="/">tasks</Link><span className='mx-2'>{"/"}</span>{taskId}</p>
      {                                                                  !titleClick && editInputSave
      ?
       <h1 onClick={(e) => {
        setTitleClick(true)
      }} >{editInputSave}</h1> 
      :
      <>
     <Input type="text" onChange={(e) => {
          handleChange(e)
        }}
        name={"editHeaderInput"}
        value={inputValue.length === 0 ? "" : inputValue ? inputValue :title}
        className="editHeaderInput"
        />
        <div className='editButtonContainer mt-2'>
          {/* <Button className='mx-2 cancleBtnColor' onClick={() => {
             setInputValue(editInputSave)
             setTitleClick(false)
          }}>cancle</Button> */}
           <span  className="editButton" onClick={() => {
               setInputValue(editInputSave)
             setTitleClick(false)
           }}><i class="fa fa-times" aria-hidden="true"></i></span> 
        {/* <Button className='saveBtnColor' onClick={() => handleSave()}>save</Button> */}
       <span className="editButton"onClick={() => handleSave()}><i class="fa fa-check" aria-hidden="true"></i></span> 
        </div>
     </>
     }
    </div>
  )
}


export default EditInput