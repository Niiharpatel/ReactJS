import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ClassCom from '../ClassComp/ClassCom'
import Body from '../ClassComp/Body'
import Footer from '../ClassComp/Footer'

import Functional from '../FunctionalComp/Functional'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

     {/* <ClassCom /> 

     <Body /> 

     <Footer />*/}


     <Functional />
     

  </React.StrictMode>,
)
