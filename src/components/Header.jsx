import { useState } from "react";
import { MobileNavigation, DesktopNavigation } from "./Navigation";
import Profile from "../assets/image-avatar.png";
import { Cart } from "./Cart";
import {Sheet, SheetHeader, SheetTrigger, SheetClose, SheetContent} from "./ui/sheet"
import { ShoppingCart } from "lucide-react";

export default function Header({item, removeFromCart}) {
    const [open, setOpen] = useState(false)
    return (
        <header className="flex justify-between px-6 md:px-[200px] py-8 items-center">
            <div className="flex space-x-2 md:space-x-4 items-center">
                <MobileNavigation/>
                <span className="font-bold text-2xl">Snearkers</span>
                <DesktopNavigation/>
            </div>
            <div className="flex space-x-4 items-center">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="relative cursor-pointer">
                            <div>
                                <ShoppingCart className="w-8 h-8"/>
                                {item.quantity > 0 && (
                                <span className="absolute -top-1 right-0 bg-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                    {item.quantity}
                                </span>)}
                            </div>
                    </SheetTrigger>
                    <SheetContent  side={'top'} className="m-4 px-6 sm:w-[400px] rounded-[20px] pt-10 pb-6">
                        <Cart item={item} removeFromCart={removeFromCart}/>
                    </SheetContent>
                </Sheet>
                <img src={Profile} alt="profile image" className="w-10 h-10 rounded-full"/>
            </div>
        </header>
    )
}