// Components
import Navbar from 'components/Navbar'
import Router from '@/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='relative'>
      {/* Navbar */}
      <Navbar />
 <BrowserRouter basename="/Movie-App">
      <Router />
 </BrowserRouter>
      {/* Content */}
    </div>
  )
}

export default App
