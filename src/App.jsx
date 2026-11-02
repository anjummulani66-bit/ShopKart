import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'
import { CartProvider } from './components/CartContext'
import Contact from './pages/Contact'
import About from './pages/About'



function AppContent() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          
        </Route>
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
      <AppContent />
      </ThemeProvider>
   </CartProvider>
   

  

  )
}

export default App




























// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Layout from './components/Layout'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Cart from './pages/Cart'
// import Products from './pages/Products'
// import { useContext } from 'react'
// import { ThemeContext, ThemeProvider } from './components/ThemeContext'


// function AppContent(){

//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={theme}>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='/products' element={<Products />} />
//           <Route path='/login' element={<Login/>} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/cart' element={<Cart />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
    
//   );
// }

// function App(){
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   )
// }

// export default App
