// import TextForm from './component/TextForm';
import './App.css';
import TextForm2 from './component/TextFormTwo';

import Navbar from './component/Navbar'

import Footer from'./component/Footer'


function App() {
  return (
    <>

      
        <Navbar></Navbar>
        {/* // <TextForm title='Fill the form'></TextForm>  */}
        <TextForm2 heading="Fill your Text"></TextForm2>
      <Footer></Footer>
    </>
  );
}

export default App;
