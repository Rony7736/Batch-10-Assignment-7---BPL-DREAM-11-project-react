
import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const handleIsActiveState = (status) => {

    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available'
      })
    }
    else{
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }
  console.log(isActive);
  



  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <div className='mt-8'>
        <Banner></Banner>
      </div>

      <div>
        <Available isActive={isActive} handleIsActiveState={handleIsActiveState}></Available>
      </div>

    </div>
  )
}

export default App
