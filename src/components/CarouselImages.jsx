import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export default function CarouselImages ({imagesArray}) {

    return (
        <Carousel className="w-full" opts={{loop: true}}>
            <CarouselContent>
                {
                    imagesArray.map((image, index)=> {
                        return (
                            <CarouselItem key={index} className="flex w-full">
                                <div className="flex aspect-square items-center justify-center w-full">
                                    <img src={image.img} alt={image.alt} className={"flex  h-80 md:h-full md:rounded-[10px] md:mb-28 w-full bg-cover object-cover"}/>
                                </div>
                            </CarouselItem>
                                    )
                                   }) 
                   
                    }
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200 transition duration-300 ease-in-out w-10 h-10 md:hidden" ></CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-200 transition duration-300 ease-in-out w-10 h-10 md:hidden"></CarouselNext>
        </Carousel>
    )
}