import React,{useState} from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup,
  Modal,
  ModalBody,
} from "reactstrap";
import TextEditor from '../ReactQuill/TextEditor';
import "./styles.scss"

const tabs =[{
    name:"General",
    tabNum:1
},{
    name:"Target Dates",
    tabNum:2
}]



const NavItemContainer = () => {

    const [activeTab,setActiveTab] = useState(1)


    const toggle = (num) => {
      setActiveTab(num)
    }


  return (
    <div >
    <div className='d-flex navContainer'>
    {tabs.map(tab => {
         return (
          <NavItem className="navTab mb-1 mx-3 mb-lg-0">
                        <NavLink
                          className={
                             activeTab === tab.tabNum  && "activeTab" 
                          }
                          href="#"
                          onClick={() => toggle(tab.tabNum)}
                        >
                          {tab.name}
                        </NavLink>
                      </NavItem>
         )
        })}
   </div>
         <TabContent activeTab={activeTab}>
                  <TabPane tabId={1}>
                    <div className='mt-5'>
                      <TextEditor/>
                   </div>
                  </TabPane>
                <TabPane tabId={2}>
               <div> <h1 className='mt-2'>Target dates</h1></div>
                </TabPane>
        </TabContent>
    </div>
  )
}

export default NavItemContainer