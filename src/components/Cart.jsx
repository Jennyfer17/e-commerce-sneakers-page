import { Button } from "./ui/button"
import { Trash } from "lucide-react"

export function Cart({item, removeFromCart}) {
    
    return (
        <div className="flex w-full flex-col space-y-4">
            <h1 className="font-bold">Cart</h1>
            <hr/>
            {
                item.inCart ? (<div className="flex w-full flex-col space-y-4">           
                    <div className="flex gap-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-[8px]"/>
                        <span className="flex w-full items-center justify-between">
                            <span className="text-justify text-[16px] text-muted-foreground">
                                {item.title} <br/> ${item.newPrice} x {item.quantity} <span className="font-bold text-black">${item.newPrice * item.quantity}</span>
                            </span>
                            <Button onClick={() => removeFromCart()} className="bg-transparent">
                                <Trash className="text-muted-foreground"/>
                            </Button>
                        </span>
                    </div>
                    <Button className="bg-orange text-black">Checkout</Button>
                </div>) : (
                    <div>
                        <p className="text-muted-foreground">Your cart is empty</p>
                    </div>
                )
            }
        </div>
    )
}