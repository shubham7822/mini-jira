import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'reactstrap';
import "./styles.scss"

const TextEditor = () => {
    
   const defaultValue = `<div>
   <div>
   <strong>Discription</strong>
   </div>
   <p>please enter the description</p>
   <div>
   <strong>ACCEPTANCE CRITERIA</strong>
   </div>
   </div>`

    const [value, setValue] = useState("");
   const[saveEditorValue,setSaveEditorValue] = useState("Add a description")
   const[isEditorVisible,setIsEditorVisible] = useState(false)
   const quill= new Quill()

   const handleSave= () => {
    setSaveEditorValue(value)
    setIsEditorVisible(false)    
   }


   const handleInputChange =(e) => {
    setValue(e)
   }

   const clickOnDiv = () => {
      setIsEditorVisible(true)
   }

  return (
  <div className='textEditor'>
    <h6>Description</h6>
   {!isEditorVisible &&  saveEditorValue ? 
   <div onClick={() => clickOnDiv()} dangerouslySetInnerHTML={{ __html: saveEditorValue}}></div> : 
    <ReactQuill 
//    defaultValue={"i am set to default"}
   theme="snow" value={value ? value : saveEditorValue} onChange={(e) => handleInputChange(e)}/>}

   {isEditorVisible &&  <div className={`mt-2 $ d-block`}>
    <Button onClick={() =>  handleSave()} className='mx-2 saveBtnColor'>Save</Button>
    <Button className='cancleBtnColor' onClick={() => setIsEditorVisible(false)}>Cancle</Button>
    </div> }
  </div>
  )
}

export default TextEditor