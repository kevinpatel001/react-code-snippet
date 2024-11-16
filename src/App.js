// import TextForm from './component/TextForm';

import TextForm2 from './component/TextFormTwo';

import Navbar from './component/Navbar'

import Footer from './component/Footer'


// import Practice from "./component/Practice"


import React from "react";

import './App.css';

function App() {
  return (
    <>

      {/* <Practice></Practice> */}

      <Navbar></Navbar>

      {/* <TextForm title='Fill the form'></TextForm> */}

      <TextForm2 heading="Fill your Text"></TextForm2>

      <Footer></Footer>

    </>
  );
}

export default App;
