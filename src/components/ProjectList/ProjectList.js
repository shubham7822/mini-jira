import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import "../ProjectList/styles.scss"
import {Link} from "react-router-dom"

function ProjectList(props) {

    const {task,taskKey,id,userName} = props

  return (
    <div className='prjCard card'>
    <Link to={`/edit-task/${taskKey}`} className='prjContainer'>
           <span className='taskId'>{`${taskKey}${"-"}${id}`}</span>     
           <span>{task}</span>
           <div>
           <Avatar name={userName?.length ? userName : "unAssigned"} size="30" round={true}
            color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
            textSizeRatio={3}
            />  
           </div>
    </Link>
    </div>
  )
}

export default ProjectList