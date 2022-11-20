import React, { useState } from 'react'
import { Dropdown,DropdownItem,DropdownMenu, DropdownToggle } from 'reactstrap'

const CommonDropdown = (props) => {

    const {dropdownArray,handleClick,dropdownValue} = props
    const[dropdownOpen,setDropdownOpen] = useState(false)


    const getDropdown = (item) => {

    }

  return (
    <div>
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
            <DropdownToggle caret-size="lg">
                {dropdownValue || "To Do"} <i class="fa fa-angle-down mx-1" aria-hidden="true"></i>
            </DropdownToggle>
            <DropdownMenu  >
        {dropdownArray.map(item => {
            return (
                // <div className='d-flex kustify-content-between'>
                <DropdownItem onClick={() => handleClick(item)}>{item}</DropdownItem>
                
            //    </div>
            )
        })}
        </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default CommonDropdown