import {cn} from "../lib/utils";
export function ProductImage({ image, alt, className}) {
    return (
        <img src={image} alt={alt} className={cn(className, "")}/>
    )
}