import Profile from "../assets/image-avatar.png";

export function ProfileImage(image, alt) {
    return (
        <div className="">
            <img src={image} alt={alt}/>
        </div>
    )
}