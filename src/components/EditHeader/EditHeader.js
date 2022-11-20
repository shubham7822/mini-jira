import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import  NavItem  from '../NavItem/NavItem'
import EditInput from '../EditInput/EditInput'
import CommonDropdown from '../Dropdown/CommonDropdown'
import EditRightSection from '../../views/EditRightSection'

const EditHeader = (props) => {
  
  const params = useParams()

  const taskList = useSelector(state=>  state?.tasks)

  const task = taskList.filter(item => item.taskKey === params?.id)[0]

 
  return (
    <div>
      <div>
        <EditInput title={task?.taskName} taskId={params?.id}/>
        <div className='mt-5'>
        <NavItem/>
        </div>
      </div>
    </div>

  )
}

export default EditHeader