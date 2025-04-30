// import {useState} from 'react'
// import { Menu, X } from 'lucide-react'

// export function MobileNavigation() {
//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <nav className=''>
//             <button onClick={() => setIsOpen(true)} className={`cursor-pointer ${isOpen ? 'hidden' : 'block'}`}>
//                 <span className='sr-only'>Open menu</span>
//                 <Menu/>
//             </button>
//             {
//                 isOpen && <div className='w-10/12 absolute left-0 top-0 bg-amber-300 flex flex-col z-30 h-screen'>
//                     <button onClick={() => setIsOpen(false)} className='cursor-pointer'>
//                         <X/>
//                     </button>
//                     <ul>
//                         <li>Collections</li>
//                         <li>Men</li>
//                         <li>Women</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             }
//         </nav>
//     )
// }

import { cn } from "../lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "../components/ui/navigation-menu"
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import {useState} from 'react'
import { Menu} from 'lucide-react'

export function MobileNavigation () {
    const [open, setOpen] = useState(false)  
    return (
      <Sheet open={open} onOpenChange={setOpen} className='flex md:hidden'>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className='h-5 w-5'/>
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className='sm:w-[300px] py-20'>
          <ul className="px-6">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </SheetContent>
      </Sheet>
    )
  }
  