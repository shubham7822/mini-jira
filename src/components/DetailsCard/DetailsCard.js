import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { useSelector } from 'react-redux'
import { Card, Collapse } from 'reactstrap'
import AvatarDropdown from '../AvatarDropdown/AvatarDropdown'
import "./styles.scss"

const DetailsCard = () => {
  const [collapseMenu,setCollapseMenu] = useState(true)

  const upArrow = <i class="fa fa-angle-up" aria-hidden="true"></i>
  const downArrow = <i class="fa fa-angle-down" aria-hidden="true"></i>
  
   const userName = useSelector(state =>  state?.userName)



  return (
    <Card className='detailsCard p-2'>
       <div onClick={() => setCollapseMenu(!collapseMenu)} className='d-flex justify-content-between align-items-center'> 
        <h6 className='cardHeading'>Details</h6>
        <span className='m-2'>{collapseMenu ? upArrow : downArrow}</span>
        </div>
      <div className='detailsBootomBorder'></div>
      <Collapse isOpen={collapseMenu}>
      <div className='initials'>
       <p className='text-start detailsHeading'>Assignee</p>
     <div>
     <AvatarDropdown
     currentAvatar={userName?.length ? userName : "unAssigned" }
     avatarArray={["shubham mansute","unAssigned","y","z"]}
     />
  </div>  
 </div>
   <div className='initials'>
  <p className='text-start detailsHeading'>Reporter</p>
    <div>
    <AvatarDropdown
     currentAvatar={"shunbham mansute"}
     avatarArray={["shunham mansute","unAssigned","y","z"]}
     />
         </div>  
      </div>
      </Collapse>
    </Card>
  )
}

export default DetailsCard