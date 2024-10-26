
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const [selectedPlayers, setSelectedPlayers] = useState([])

  const [price, setPrice] = useState(0)
  // console.log(price);

  const newPrice = (pr) => {
    const newPrice = price + pr
    setPrice(newPrice)
    toast.success("Claim Free Credit 100000 add successfully",
      {
        position:"top-center"
      }
    )
  }
  
 

  const handleDelete = (id) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id != id)
    setSelectedPlayers(remainingPlayers)
  }

  const handleSelectedPlayers = (player) => {

    if(selectedPlayers.length >= 6){
      toast.error('Player limit is full')
      return;
    }
    if(player.price > price ){
      toast.error('Price is Not Available Please Claim Free Credit')
      return;
    }
   
    

    // find loop of selectedPlayers
    const isExist = selectedPlayers.find((p) => p.id == player.id)

    // condition 
    if (isExist) {
      toast.error('Already Player is Exist')
    }
    
    else {
      const newPlayers = [...selectedPlayers, player]
      setSelectedPlayers(newPlayers);
      setPrice(price - player.price);
      toast.success(`Added Successfully ${player.author}`,
        {
          position:"top-center"
        }
      )
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
      <Navbar price={price}></Navbar>

      <div className='mt-8'>
        <Banner newPrice={newPrice}></Banner>
      </div>

      <div>

        <Available
          setIsActive={setIsActive}
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

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
