import React, { useState } from 'react'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap'
import miniJira from "../assets/img/jiraImg.png"
import loginGif from "../assets/gifs/code4.gif"
import "./view.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setUserName } from '../redux/actions'

const LoginForm = () => {

    const [email,setEmail] = useState("")

    const dispatch = useDispatch()

    const handleSave = (e) => {
    if(email) dispatch(setUserName(email.substring(0,email.indexOf("@"))))
    e.preventDefault()
    }


    return (
    <div className='d-flex align-items-center'>
     <Card  className='jiraLoginFormContainer'>
     <Form className='jiraLoginForm'>
        <div className='d-flex align-items-center justify-content-center mb-2'>
             <img src={miniJira} className="headerImg"/>
             <h2>mini jira</h2>
        </div>
        <FormGroup>
          <Label for="miniJiraMail">Email</Label>
          <Input autoComplete='off' type="email" onChange={(e) => {
            setEmail(e.target.value)
          }} name="email" id="Email" placeholder="enter your Email" />
        </FormGroup>

        <FormGroup>
          <Label for="miniJiraPass">Password</Label>
          <Input autoComplete='off' type="password" name="email" id="Password" placeholder="enter your Password" />
        </FormGroup>

        <Button className='saveBtnColor' onClick={(e) => handleSave(e)}>Sign Up</Button>
        </Form>
        </Card>
         <img src={loginGif} className="loginImage"/>
        </div>
  )
}

export default LoginForm