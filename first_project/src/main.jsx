import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ClassCom from '../ClassComp/ClassCom'
import Body from '../ClassComp/Body'
import Footer from '../ClassComp/Footer'

import Functional from '../FunctionalComp/Functional'
import Mainsec from '../FunctionalComp/Mainsec'
import Footerfun from '../FunctionalComp/Footerfun'

// import UsrState from '../../UsrState';

// import Fontcolorchange from './UseState/Fontcolorchange'

import Fontcolorchange2 from './UseState/Fontcolorchange2'
import FunProps from './Props/FunProps'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <ClassCom />

    <Body />

    <Footer /> */}


    {/* <Functional />

    <Mainsec />

    <Footerfun /> */}

    {/* <UsrState /> */}

    {/* <Fontcolorchange /> */}

    {/* <Fontcolorchange2 /> */}

    <FunProps name={"Niihar"} />

    {/* <FunProps obj={{
      name: "Niihar",
      age: 23
    }} /> */}




  </React.StrictMode>,
)
