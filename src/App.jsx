import { createContext, useEffect, useState } from "react"
import Header from "./components/header/header"
import SideCart from "./components/side_cart/side-cart"
import Home from "./pages/home/home"
import { Route, Routes } from "react-router-dom"
import Follow from "./pages/follow/follow"
import Orders from "./pages/orders/orders"

export const AppContext = createContext({})

function App() {
  const [sidecart, setsidecart] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  const [items, setItems] = useState([])
  const [follow, setFollow] = useState([])
  const [orders, setOrders] = useState([])


  useEffect(()=>{
    setIsloading(false)
  },[])
  return (
    <>
      <AppContext.Provider value={{items,follow,isLoading,setFollow,setItems,sidecart,setsidecart,orders,setOrders}}>
        {sidecart?<SideCart/>:''}
        <div className="container">
          <Header/>
          <div className='head-line'></div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/follow' element={<Follow/>}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  )
}

export default App
