
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <div className='mt-8'>
        <Banner></Banner>
      </div>

    </div>
  )
}

export default App
