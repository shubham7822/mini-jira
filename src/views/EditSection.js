import React, { useState } from 'react'
import CommonDropdown from '../components/Dropdown/CommonDropdown'
import EditHeader from '../components/EditHeader/EditHeader'
import TextEditor from '../components/ReactQuill/TextEditor'
import EditRightSection from './EditRightSection'
import "./view.scss"

const EditSection = () => {

  return (
    <div className='container mx-4'>
     <EditHeader/>
     </div>
  )
}

export default EditSection