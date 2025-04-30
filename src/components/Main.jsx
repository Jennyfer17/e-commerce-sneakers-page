import { ProductImage } from "./ProductImage"
import ImageProduct1 from "../assets/image-product-1.jpg"
import ImageProduct2 from "../assets/image-product-2.jpg"
import ImageProduct3 from "../assets/image-product-3.jpg"
import ImageProduct4 from "../assets/image-product-4.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
import { Button } from "./ui/button"
import { AddSubtract } from "./AddSubtract"
import CartIcon from "../assets/icon-cart.svg";

import { Cart } from "./Cart"
import { useState } from "react"


export default function Main({item, handleIncrement, handleDecrement, addToCart}) {
    const imagesArray = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4]
    // console.log(item.quantity)
    console.log(item.inCart)

    return (
        <main className="grid space-y-6">
            <div>
                <Carousel className="w-full" opts={{loop: true}}>
                    <CarouselContent>
                        {
                           imagesArray.map((image, index)=> {
                            return (
                                <CarouselItem key={index}>
                                    <div className="flex aspect-square items-center justify-center">
                                        <ProductImage image={image} alt={`Sneaker ${index + 1}`} className={"h-80 w-full bg-cover object-cover"}/>
                                    </div>
                                </CarouselItem>
                            )
                           }) 
                        }
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200 transition duration-300 ease-in-out w-10 h-10" ></CarouselPrevious>
                    <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200 transition duration-300 ease-in-out w-10 h-10"></CarouselNext>
                </Carousel>
            </div>
            <div className="px-6 grid space-y-2">
                <span className="uppercase text-gray-500 font-thin text-xs">{item.name}</span>
                <h1 className="text-xl font-medium w-52">{item.title}</h1>
                <p className="text-gray-500 text-justify">{item.description}</p>
            </div>
            <div className="px-6 flex relative">
                <span className="flex space-x-3 items-center">
                    <span className="font-medium text-2xl">${item.newPrice}</span>
                    <span className="py-1 px-2 rounded-[5px] bg-gray-900 text-xs text-white">{item.discount}%</span>
                </span>
                <span className="flex justify-end font-medium absolute right-0 px-6 text-muted-foreground">${item.oldPrice}</span>
            </div>                
            <div className="mx-6"><AddSubtract handleIncrement={handleIncrement} handleDecrement={handleDecrement}/></div>
            <Button className={`mx-6 rounded-[8px] mb-10 py-6 flex items-center space-x-3`} disabled={item.quantity === 0} onClick={()=> addToCart()}>
               <img src={CartIcon} alt="cart icon" className="w-4 h-4"/> <span>Add to cart</span>
            </Button>
        </main>
    )
}