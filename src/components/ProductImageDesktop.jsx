import { useState } from "react"

export default function ProductImage ({imagesArray}) {
    const [activeImage, setActiveImage] = useState(imagesArray[0])
  
    return (
        <div className="grid space-y-6">
            <div>
                <img src={activeImage.img} alt={activeImage.alt} className="rounded-[10px]"/>
            </div>
            <div className="flex w-full justify-between">
                {
                    imagesArray.map((image)=> {
                        return (
                            <button key={image.id} onClick={()=> setActiveImage(image)} className={`w-24 h-24 cursor-pointer ${image.id == activeImage.id ? 'opacity-35' : 'opacity-100'} hover:opacity-35`}>
                                <img src={image.img} alt={image.alt} onClick={()=> setActiveImage(image)} className="rounded-[10px]"/>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}