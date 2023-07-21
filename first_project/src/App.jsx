import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassProps from './Props/ClassProps'
import Functional from '../FunctionalComp/Functional'
import Mainsec from '../FunctionalComp/Mainsec'
import Footerfun from '../FunctionalComp/Footerfun'
import ClassCom from '../ClassComp/ClassCom'
import Body from '../ClassComp/Body'
import Footer from '../ClassComp/Footer'
// import UsrState from '../../UsrState';
import Fontcolorchange from './UseState/Fontcolorchange'
import Fontcolorchange2 from './UseState/Fontcolorchange2'
import FunProps from './Props/FunProps'
import PropsDestructuring from './Props/PropsDestructering'
import ConditionalRendor from './ConditionalRen-Map-Fragment/ConditionalRendor'
import FragmentComp from './ConditionalRen-Map-Fragment/FragmentComp'
import MapKey from './ConditionalRen-Map-Fragment/MapKey'



function App() {
  return (
    <div>
      {/* <ClassCom />

     <Body />

     <Footer /> */}


      {/* <Functional />

     <Mainsec />

     <Footerfun /> */}

      {/* <UsrState /> */}

      {/* <Fontcolorchange /> */}

      {/* <Fontcolorchange2 /> */}

      {/* <FunProps name={"Niihar"} /> */}

      {/* <ClassProps name={"This is class props"} /> */}

      {/* <FunProps obj={{
      name: "Niihar",
       age: 23
     }} /> */}

      {/*================================ Props Destructering ================================================ */}

      {/* <PropsDestructuring name={"Niihar"} age={23} /> */}

      {/* ================================ Conditional Rendering ============================================== */}

      {/* <ConditionalRendor isMale={false} />

      <ConditionalRendor isMale={true} /> */}

      {/* <ConditionalRendor isMale={true} isYoung={true} /> */}

      {/* ==================================== Fragment ====================================================== */}

      {/* <FragmentComp /> */}

      {/* ========================================= Map ====================================================== */}

      <MapKey />




    </div>
  );
}

export default App

