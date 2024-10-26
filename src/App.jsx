
import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AvailableCart from './components/AvailableCart/AvailableCart'

function App() {

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const [selectedPlayers, setSelectedPlayers] = useState([


  ])

  const handleDelete = (id) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id != id)
    setSelectedPlayers(remainingPlayers)
  }

  const handleSelectedPlayers = (player) => {

    // find loop of selectedPlayers
    const isExist = selectedPlayers.find((p) => p.id == player.id)

    // condition 
    if (isExist) {
      alert('Already Exist')
    }
    else {
      const newPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newPlayers);
    }

  }



  const handleIsActiveState = (status) => {

    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available'
      })
    }
    else {
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <div className='mt-8'>
        <Banner></Banner>
      </div>

      <div>

        <Available
          handleDelete={handleDelete}
          handleSelectedPlayers={handleSelectedPlayers}
          selectedPlayers={selectedPlayers}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></Available>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
