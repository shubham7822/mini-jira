import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap'

const AvatarDropdown = (props) => {
 
    const {avatarArray,currentAvatar,callBack} = props
 
    const [isOpen,setIsOpen] = useState(false)

    const handleDropdownOpen = () => {
       setIsOpen(!isOpen)
    }

    const handleCurrentActiveAvatar = () => {
       callBack()
    }

    return (
    <div>
     <div onClick={()=> handleDropdownOpen()} className='d-flex align-items-center mt-2'>
     <Avatar name={currentAvatar} size="30" round={true}
      color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
      textSizeRatio={3}
      />   
      <span className='mx-2'>{currentAvatar}</span>
     </div>      
     <Dropdown isOpen={isOpen}>
        <DropdownMenu className='mt-2'>
        {avatarArray?.map((item,index) => {
             return (
                    <div onClick={() => handleCurrentActiveAvatar()} key={index}className='d-flex align-items-center mt-2 mx-2'>
                    <Avatar name={item} size="30" round={true}
                    color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
                    textSizeRatio={3}
                    />   
                    <DropdownItem className='mx-2'>{item}</DropdownItem>
                    </div> 
             )
        })}
        </DropdownMenu>
     </Dropdown>
   </div>
  )
}

export default AvatarDropdown