
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SimpleBottomNavigation from './components/Footer'
import Header from './components/Header'
import Trending from './page/Trending'
import Movies from './page/Movies'
import Tvseries from './page/TvSeries'



function App() {


  // useEffect(()=>{
  //   async function x(){
  //     const res = await networkCall();
  //     console.log(res.data)
  //   }
  //   x();
  // },[])
  return (
    <>
      <Header/>
      <div className="app">

      <Routes>
        <Route exact path='/' element={<Trending/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/tv' element={<Tvseries/>}/>
      </Routes>
      </div>
      <div className='footer'>
        <SimpleBottomNavigation/>
      </div>
      
      
    </>
  )
}

export default App
