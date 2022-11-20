import React ,{useState} from 'react'
import { Col, Row } from 'reactstrap'
import ButtonComp from '../components/Button/Button'
import ProjectList from '../components/ProjectList/ProjectList'
import Search from '../components/Search/Search'
import {useDispatch,useSelector} from "react-redux"
import ShortUniqueId from "short-unique-id"
import {setTaskList} from "../redux/actions"
import Pagination from '../components/Pagination/Pagination'
import waveHand from "../assets/gifs/waveHand.gif"


function CreateSection() {

    const [projectList,setPrjList] = useState([])
    const [projectName,setProjectName] = useState("")
    const [currentPage,setCurrentPage]= useState(1)
    const [postPerPage,setPostPerPage] = useState(5)


    const dispatch = useDispatch()
    const taskList = useSelector(state=>  state?.tasks)
    const userName = useSelector(state => state?.userName)

  // const uid = new ShortUniqueId({ length: 4 });
    const handleChange = (e) => {
            setProjectName(e.target.value)
    }
  
    const handleCreateTask = (e) => {  

      if(!projectName){
        return 
      }
       const key =projectName?.split(" ")?.map(item => item[0])?.join("")?.slice(0,3)?.toUpperCase()

        dispatch(setTaskList({
          taskName:projectName,
          taskKey:key
        }))
         setProjectName("")
        e.preventDefault()
    }

    const indexOfLastPost =  currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = taskList.slice(indexOfFirstPost,indexOfLastPost);


    const paginate = (number) => {
      setCurrentPage(number)
    }

  return (
    <>
    <div className='d-flex align-items-center m-3'>
    <h2 className='truncateUserName'>{`welcome, ${userName}`}</h2>
    <img src={waveHand} className={`waveHand ${userName?.length === 0 && "d-none"}`}/>
    </div>
    <div className='createSection'>
    <div className='d-flex'>
        <div className='mx-2'>
        <Search placeholder="create Tasks" handleChangeCallBack={(e) => handleChange(e)} inputValue={projectName}/>
        </div>
        <div>
       <ButtonComp btnText="Create" handleClickCallBack={handleCreateTask}/>
       </div>
  </div>
   <div>
    {currentPosts?.map((item,index) => {
        return <ProjectList 
        task={item.taskName}
        taskKey={item.taskKey}
        userName={userName}
        id={index}/>
      })}
    </div>

   <div className='mt-2'>
    <Pagination postPerPage={postPerPage} totalPosts={taskList?.length}
    paginate={paginate}
    />
    </div>
  </div>
  </>
  )
}

export default CreateSection