import React from 'react'
import Footer from './components/Footer/Footer'
import Routy from './routes/Routy'
import NotFound from './pages/NotFound/NotFound'


const App = () => {
  return (
    <div>
      <Routy />
      <NotFound />
      <Footer />
    </div>
  )
}

export default App