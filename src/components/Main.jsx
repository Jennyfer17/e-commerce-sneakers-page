import ImageProduct1 from "../assets/image-product-1.jpg"
import ImageProduct2 from "../assets/image-product-2.jpg"
import ImageProduct3 from "../assets/image-product-3.jpg"
import ImageProduct4 from "../assets/image-product-4.jpg"
import ProductImage from "./ProductImageDesktop"
import { Button } from "./ui/button"
import { AddSubtract } from "./AddSubtract"
import CarouselImages from "./CarouselImages"
import { ShoppingCart } from "lucide-react"


export default function Main({item, handleIncrement, handleDecrement, addToCart}) {
    const images = [
        {
            id: 1,
            img: ImageProduct1,
            alt: "sneaker 1"
        },
        {
            id: 2,
            img: ImageProduct2,
            alt: "sneaker 2"
        },
        {
            id: 3,
            img: ImageProduct3,
            alt: "sneaker 3"
        },
        {
            id: 4,
            img: ImageProduct4,
            alt: "snearke 4"
        }
    ]

    return (
        <main className="grid md:grid-cols-2 space-y-6 md:gap-16 md:items-center md:px-[200px] md:my-[100px]">
            <div className="flex md:hidden">
                <CarouselImages imagesArray={images}/>
            </div>
            <div className="hidden md:grid">
                <ProductImage imagesArray={images}/>
            </div>
            <div className="grid px-6 space-y-4 md:gap-8">
                <div className="grid md:gap-2">
                    <span className="uppercase text-gray-500 font-thin text-xs md:text-sm">{item.name}</span>
                    <h1 className="text-xl font-medium w-52 md:text-4xl md:w-96">{item.title}</h1>
                    <p className="text-gray-500 text-justify">{item.description}</p>
                </div>
                <div className="flex relative items-center md:grid md:grid-rows-2 md:gap-8">
                    <span className="flex space-x-3 items-center">
                        <span className="font-medium text-2xl">${item.newPrice}</span>
                        <span className="py-1 px-2 rounded-[5px] bg-gray-900 text-xs text-white">{item.discount}%</span>
                    </span>
                    <span className="font-medium absolute right-0 text-muted-foreground md:left-0">${item.oldPrice}</span>
                </div>
                <div className="grid md:grid-cols-3 space-y-4 md:gap-3">
                    <AddSubtract handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
                    <Button className={`w-full rounded-[8px] mb-10 py-6 flex items-center space-x-3 md:col-span-2 bg-orange hover:bg-pale-orange text-black cursor-pointer`} disabled={item.quantity === 0} onClick={()=> addToCart()}>
                        <ShoppingCart/> <span>Add to cart</span>
                    </Button>
                </div>             
            </div>
        </main>
    )
}