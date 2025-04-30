import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react'
import ImageProduct2 from "./assets/image-product-2.jpg"

function App() {
  const [item, setItem] = useState({
    name: "Sneaker company",
    image: ImageProduct2,
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    newPrice: 125,
    discount: 50,
    oldPrice: 250,
    quantity: 0,
    inCart: false
  })
  const handleIncrement = () => {
    setItem((prevItem) => ({
      ...prevItem,
      quantity: prevItem.quantity + 1
    }));
    console.log(item.quantity);
  }

    const handleDecrement = () => {
      setItem((prevItem) => ({
        ...prevItem,
        quantity: prevItem.quantity - 1
      }));
      console.log(item.quantity);
    }

    const addToCart = () => {
      setItem((prevItem) => ({
        ...prevItem,
        inCart: true
      }));
    }

    const removeFromCart = () => {
      setItem((prevItem) => ({
        ...prevItem,
        inCart: false
      }));
    }
  
  return (
    <div>
      <Header item={item} removeFromCart={removeFromCart}/>
      <Main item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} addToCart={addToCart}/>
    </div>
  )
}

export default App
