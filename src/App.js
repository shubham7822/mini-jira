import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import ButtonComp  from './components/Button/Button';
import Search from './components/Search/Search';
import CreateSection from './views/CreateSection';
import Header from './components/Header/Header';
import {Routes,Route} from "react-router-dom"
import React from 'react';
import EditSection from './views/EditSection';
import "./global.scss"
import EditRightSection from './views/EditRightSection';
import { Col, Row } from 'reactstrap';
import codeGif from "./assets/gifs/code2.gif" 
import codeGifWave from "./assets/img/wave.svg"
import LoginForm from './views/LoginForm';

function App() {
  return (
    <div className='createWrapper'>
       <Header/>
    <Routes>
    <Route path="/" element={
     <>
     <div>
       <CreateSection/>
      </div>
      <span>
      <img src={codeGifWave} className="appGifWave"/> 
      <img className='appGifimage' src={codeGif}/>
    </span>
    </>
    }>

    </Route>
    <Route path="/edit-task/:id" element={
      <Row> 
      <Col md={9}>
        <EditSection/>
      </Col>
      <Col md={3}>
        <EditRightSection/>
      </Col>
      </Row>
    }>     
    </Route>

     <Route path="/login" element={
        <div>
        <LoginForm/>
        </div>
      }></Route>
    </Routes>
    </div>
  );
}

export default App;
