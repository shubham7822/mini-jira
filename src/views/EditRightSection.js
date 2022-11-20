import React, { useState } from 'react'
import DetailsCard from '../components/DetailsCard/DetailsCard'
import CommonDropdown from '../components/Dropdown/CommonDropdown'

const EditRightSection = () => {
  
    const [dropdownValue,setDropdownValue] = useState("")
 
  const handleClick = (item) => {
    setDropdownValue(item)
  }
    return (
    <div className='editRightSection'>
   <div className='statusDropdown'>
       <CommonDropdown
       dropdownArray={["To Do","In Progress","Done"]}
       handleClick={handleClick}
       dropdownValue={dropdownValue}
       />

      <DetailsCard/>
    </div>
    </div>
  )
}

export default EditRightSection